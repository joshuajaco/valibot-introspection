import { createRequire } from "node:module";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  parse,
  TSESTree,
  AST_NODE_TYPES,
  simpleTraverse,
} from "@typescript-eslint/typescript-estree";
import { format } from "prettier";

const require = createRequire(import.meta.url);
const definitionsPath = join(dirname(require.resolve("valibot")), "index.d.ts");
const code = (await readFile(definitionsPath)).toString();
const ast = parse(code);

const typeExports = ast.body
  .filter((statement) => statement.type === "ExportNamedDeclaration")
  .flatMap((_export) => _export.specifiers)
  .filter((specifier) => specifier.exportKind === "type");

const typeDeclarations = ast.body.filter(
  (statement) =>
    statement.type === "TSTypeAliasDeclaration" ||
    statement.type === "TSInterfaceDeclaration",
);

const excludes = [
  "GenericSchema",
  "GenericSchemaAsync",
  "GenericTransformation",
  "GenericTransformationAsync",
  "GenericValidation",
  "GenericValidationAsync",
  "GenericIssue",
];

const types = typeExports.filter(
  (spec) => !excludes.includes(spec.exported.name),
);

const syncSchemas = types.filter(_extends("BaseSchema"));
const asyncSchemas = types.filter(_extends("BaseSchemaAsync"));
const syncTransformations = types.filter(_extends("BaseTransformation"));
const asyncTransformations = types.filter(_extends("BaseTransformationAsync"));
const syncValidations = types.filter(_extends("BaseValidation"));
const asyncValidations = types.filter(_extends("BaseValidationAsync"));
const issues = types.filter(_extends("BaseIssue"));

await Promise.all([
  createDefinitionFile("src/schema.ts", {
    Schema: TSUnionType({ types: syncSchemas.map(constructTypeReference) }),
    SchemaAsync: TSUnionType({
      types: asyncSchemas.map(constructTypeReference),
    }),
  }),
  createDefinitionFile("src/transformation.ts", {
    Transformation: TSUnionType({
      types: syncTransformations.map(constructTypeReference),
    }),
    TransformationAsync: TSUnionType({
      types: asyncTransformations.map(constructTypeReference),
    }),
  }),
  createDefinitionFile("src/validation.ts", {
    Validation: TSUnionType({
      types: syncValidations.map(constructTypeReference),
    }),
    ValidationAsync: TSUnionType({
      types: asyncValidations.map(constructTypeReference),
    }),
  }),
  createDefinitionFile("src/issue.ts", {
    Issue: TSUnionType({ types: issues.map(constructTypeReference) }),
  }),
]);

/* ========================================================================= */
/* ========================== createDefinitionFile ========================= */
/* ========================================================================= */

type ExportMap = Record<string, TSESTree.TypeNode | undefined>;

async function createDefinitionFile(path: string, exports: ExportMap) {
  const template = [
    'import type * as v from "valibot";',
    ...Object.keys(exports).map((key) => `export type ${key} = PLACEHOLDER;`),
  ].join("\n\n");

  const program = parse(template, { loc: true, range: true });

  program.body.map((statement) => {
    if (
      statement.type === "ExportNamedDeclaration" &&
      statement.declaration?.type === "TSTypeAliasDeclaration"
    ) {
      const node = exports[statement.declaration.id.name];
      if (node) statement.declaration.typeAnnotation = node;
    }
  });

  await writeFile(
    path,
    await format(template, {
      filepath: path,
      parser: "custom",
      plugins: [
        {
          parsers: {
            custom: {
              astFormat: "estree",
              locStart: () => 0,
              locEnd: () => 0,
              parse: () => program,
            },
          },
        },
      ],
    }),
  );
}

/* ========================================================================= */
/* ========================= constructTypeReference ======================== */
/* ========================================================================= */

function constructTypeReference(spec: TSESTree.ExportSpecifier) {
  const declaration = typeDeclarations.find(
    ({ id }) => id.name === spec.local.name,
  );

  if (!declaration) {
    throw new Error(
      "Failed to find declaration for '" + spec.exported.name + "'.",
    );
  }

  let typeArguments;

  if (declaration.typeParameters) {
    const localTypes = new Map<string, TSESTree.TypeNode>();

    typeArguments = TSTypeParameterInstantiation({
      params: declaration.typeParameters.params.map((param) => {
        const value = param?.constraint ?? TSUnknownKeyword();
        localTypes.set(param.name.name, value);
        return value;
      }),
    });

    simpleTraverse(
      typeArguments,
      {
        visitors: {
          TSTypeReference: (node) => {
            if (node.type !== "TSTypeReference") return;
            if (node.typeName.type !== "Identifier") return;

            const { name } = node.typeName;

            const localType = localTypes.get(node.typeName.name);

            if (localType) {
              // @ts-expect-error we need to prevent reading parent
              delete localType.parent;
              Object.assign(node, localType);
              return;
            }

            const exportedType = typeExports.find(
              (type) => type.exported.name === name,
            );

            if (exportedType) {
              node.typeName = TSQualifiedName({
                left: Identifier({ name: "v" }),
                right: node.typeName,
              });
              return;
            }

            const moduleType = typeDeclarations.find(
              (type) => type.id.name === name,
            );

            if (moduleType) {
              switch (moduleType.type) {
                case AST_NODE_TYPES.TSTypeAliasDeclaration:
                  // @ts-expect-error we need to prevent reading parent
                  delete moduleType.typeAnnotation.parent;
                  Object.assign(node, moduleType.typeAnnotation);
                  break;
                case AST_NODE_TYPES.TSInterfaceDeclaration:
                  throw new Error("Unexpected TSInterfaceDeclaration");
                default:
                  throw new Error(
                    `Unexpected type ${moduleType satisfies never}`,
                  );
              }
              return;
            }
          },
        },
      },
      false,
    );
  }

  return TSTypeReference({
    typeName: TSQualifiedName({
      left: Identifier({ name: "v" }),
      right: Identifier({ name: spec.exported.name }),
    }),
    typeArguments,
  });
}

/* ========================================================================= */
/* ================================ _extends =============================== */
/* ========================================================================= */

function _extends(name: string) {
  return (spec: TSESTree.ExportSpecifier) => {
    const declaration = typeDeclarations.find(
      ({ id }) => id.name === spec.local.name,
    );

    if (!declaration) {
      throw new Error(
        "Failed to find declaration for '" + spec.exported.name + "'.",
      );
    }

    if (declaration.type === "TSTypeAliasDeclaration") return false;

    return declaration.extends
      .map((e) => e.expression)
      .filter((e) => e.type === "Identifier")
      .some((e) => e.name === name);
  };
}

/* ========================================================================= */
/* ============================ AST DEFINITIONS ============================ */
/* ========================================================================= */

type Base = {
  loc: TSESTree.SourceLocation;
  range: TSESTree.Range;
  parent: TSESTree.Node;
};

type Options<
  T extends TSESTree.Node,
  TPartialKeys extends keyof T = never,
  TOmitKeys extends keyof T = never,
> = Omit<T, TPartialKeys | TOmitKeys | keyof Base | "type"> &
  Partial<Pick<T, TPartialKeys> & Base>;

function TSTypeReference(
  options: Options<TSESTree.TSTypeReference, "typeArguments">,
): TSESTree.TSTypeReference {
  return Node({
    typeArguments: undefined,
    ...options,
    type: AST_NODE_TYPES.TSTypeReference,
  });
}

function TSUnionType(
  options: Options<TSESTree.TSUnionType>,
): TSESTree.TSUnionType {
  return Node({ ...options, type: AST_NODE_TYPES.TSUnionType });
}

function TSTypeParameterInstantiation(
  options: Options<TSESTree.TSTypeParameterInstantiation>,
): TSESTree.TSTypeParameterInstantiation {
  return Node({
    ...options,
    type: AST_NODE_TYPES.TSTypeParameterInstantiation,
  });
}

function TSQualifiedName(
  options: Options<TSESTree.TSQualifiedName>,
): TSESTree.TSQualifiedName {
  return Node({ ...options, type: AST_NODE_TYPES.TSQualifiedName });
}

function TSUnknownKeyword(
  options: Options<TSESTree.TSUnknownKeyword> = {},
): TSESTree.TSUnknownKeyword {
  return Node({ ...options, type: AST_NODE_TYPES.TSUnknownKeyword });
}

function Identifier(
  options: Options<
    TSESTree.Identifier,
    "typeAnnotation" | "optional" | "decorators"
  >,
): TSESTree.Identifier {
  return Node({
    typeAnnotation: undefined,
    optional: false,
    decorators: [],
    ...options,
    type: AST_NODE_TYPES.Identifier,
  });
}

function Node<const T extends TSESTree.Node>(
  options: Omit<T, keyof Base> & Partial<Base>,
): T {
  return {
    range: [0, 0],
    loc: { start: { line: 0, column: 0 }, end: { line: 0, column: 0 } },
    get parent() {
      throw new Error("parent read");
    },
    ...options,
  } as T;
}
