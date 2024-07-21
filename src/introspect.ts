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

export function introspect(schema: v.GenericSchema): Schema | WithPipe<Schema>;

export function introspect(
  schema: v.GenericSchemaAsync,
): SchemaAsync | WithPipeAsync<SchemaAsync>;

export function introspect(
  schema: v.GenericSchema | v.GenericSchemaAsync,
): Schema | WithPipe<Schema> | SchemaAsync | WithPipeAsync<SchemaAsync>;

export function introspect(schema: v.GenericSchema | v.GenericSchemaAsync) {
  return schema;
}
