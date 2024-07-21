import type * as v from "valibot";
import type { Schema, SchemaAsync } from "./schema";
import type { Validation, ValidationAsync } from "./validation";
import type { Transformation, TransformationAsync } from "./transformation";

export type Action = Transformation | Validation;

export type ActionAsync = TransformationAsync | ValidationAsync;

export type WithPipe<T extends v.GenericSchema> = T extends T
  ? v.SchemaWithPipe<[T, ...Action[]]>
  : never;

export type WithPipeAsync<T extends v.GenericSchemaAsync> = T extends T
  ? v.SchemaWithPipeAsync<[T, ...ActionAsync[]]>
  : never;

type GenericType =
  | v.GenericSchema
  | v.GenericSchemaAsync
  | v.GenericTransformation
  | v.GenericTransformationAsync
  | v.GenericValidation
  | v.GenericValidationAsync;

export type Introspect<T extends GenericType> = T extends v.GenericSchema
  ? Schema | WithPipe<Schema>
  : T extends v.GenericSchemaAsync
    ? SchemaAsync | WithPipeAsync<SchemaAsync>
    : T extends v.GenericTransformation
      ? Transformation
      : T extends v.GenericTransformationAsync
        ? TransformationAsync
        : T extends v.GenericValidation
          ? Validation
          : T extends v.GenericValidationAsync
            ? ValidationAsync
            : T;

export function introspect<T extends GenericType>(type: T): Introspect<T> {
  return type as Introspect<T>;
}
