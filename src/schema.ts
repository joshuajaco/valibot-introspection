import * as v from "valibot";

export type Schema =
  | v.AnySchema
  | v.ArraySchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.ArrayIssue> | undefined
    >
  | v.BigintSchema<v.ErrorMessage<v.BigintIssue> | undefined>
  | v.BlobSchema<v.ErrorMessage<v.BlobIssue> | undefined>
  | v.BooleanSchema<v.ErrorMessage<v.BooleanIssue> | undefined>
  | v.CustomSchema<unknown, v.ErrorMessage<v.CustomIssue> | undefined>
  | v.DateSchema<v.ErrorMessage<v.DateIssue> | undefined>
  | v.EnumSchema<v.Enum, v.ErrorMessage<v.EnumIssue> | undefined>
  | v.FileSchema<v.ErrorMessage<v.FileIssue> | undefined>
  | v.FunctionSchema<v.ErrorMessage<v.FunctionIssue> | undefined>
  | v.InstanceSchema<v.Class, v.ErrorMessage<v.InstanceIssue> | undefined>
  | v.IntersectSchema<
      v.IntersectOptions,
      v.ErrorMessage<v.IntersectIssue> | undefined
    >
  | v.LazySchema<v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>
  | v.LiteralSchema<v.Literal, v.ErrorMessage<v.LiteralIssue> | undefined>
  | v.LooseObjectSchema<
      v.ObjectEntries,
      v.ErrorMessage<v.LooseObjectIssue> | undefined
    >
  | v.LooseTupleSchema<
      v.TupleItems,
      v.ErrorMessage<v.LooseTupleIssue> | undefined
    >
  | v.MapSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.MapIssue> | undefined
    >
  | v.NanSchema<v.ErrorMessage<v.NanIssue> | undefined>
  | v.NeverSchema<v.ErrorMessage<v.NeverIssue> | undefined>
  | v.NonNullableSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.NonNullableIssue> | undefined
    >
  | v.NonNullishSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.NonNullishIssue> | undefined
    >
  | v.NonOptionalSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.NonOptionalIssue> | undefined
    >
  | v.NullSchema<v.ErrorMessage<v.NullIssue> | undefined>
  | v.NullableSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.Default<v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>, null>
    >
  | v.NullishSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.Default<
        v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
        null | undefined
      >
    >
  | v.NumberSchema<v.ErrorMessage<v.NumberIssue> | undefined>
  | v.ObjectSchema<v.ObjectEntries, v.ErrorMessage<v.ObjectIssue> | undefined>
  | v.ObjectWithRestSchema<
      v.ObjectEntries,
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.ObjectWithRestIssue> | undefined
    >
  | v.OptionalSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.Default<v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>, undefined>
    >
  | v.PicklistSchema<
      v.PicklistOptions,
      v.ErrorMessage<v.PicklistIssue> | undefined
    >
  | v.PromiseSchema<v.ErrorMessage<v.PromiseIssue> | undefined>
  | v.RecordSchema<
      v.BaseSchema<string, string | number | symbol, v.BaseIssue<unknown>>,
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.RecordIssue> | undefined
    >
  | v.SetSchema<
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.SetIssue> | undefined
    >
  | v.StrictObjectSchema<
      v.ObjectEntries,
      v.ErrorMessage<v.StrictObjectIssue> | undefined
    >
  | v.StrictTupleSchema<
      v.TupleItems,
      v.ErrorMessage<v.StrictTupleIssue> | undefined
    >
  | v.StringSchema<v.ErrorMessage<v.StringIssue> | undefined>
  | v.SymbolSchema<v.ErrorMessage<v.SymbolIssue> | undefined>
  | v.TupleSchema<v.TupleItems, v.ErrorMessage<v.TupleIssue> | undefined>
  | v.TupleWithRestSchema<
      v.TupleItems,
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.TupleWithRestIssue> | undefined
    >
  | v.UndefinedSchema<v.ErrorMessage<v.UndefinedIssue> | undefined>
  | v.UnionSchema<
      v.UnionOptions,
      | v.ErrorMessage<v.UnionIssue<v.InferIssue<v.UnionOptions[number]>>>
      | undefined
    >
  | v.UnknownSchema
  | v.VariantSchema<
      string,
      v.VariantOptions<string>,
      v.ErrorMessage<v.VariantIssue> | undefined
    >
  | v.VoidSchema<v.ErrorMessage<v.VoidIssue> | undefined>;

export type SchemaAsync =
  | v.ArraySchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.ArrayIssue> | undefined
    >
  | v.CustomSchemaAsync<unknown, v.ErrorMessage<v.CustomIssue> | undefined>
  | v.IntersectSchemaAsync<
      v.IntersectOptionsAsync,
      v.ErrorMessage<v.IntersectIssue> | undefined
    >
  | v.LazySchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>
    >
  | v.LooseObjectSchemaAsync<
      v.ObjectEntriesAsync,
      v.ErrorMessage<v.LooseObjectIssue> | undefined
    >
  | v.LooseTupleSchemaAsync<
      v.TupleItemsAsync,
      v.ErrorMessage<v.LooseTupleIssue> | undefined
    >
  | v.MapSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.MapIssue> | undefined
    >
  | v.NonNullableSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.NonNullableIssue> | undefined
    >
  | v.NonNullishSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.NonNullishIssue> | undefined
    >
  | v.NonOptionalSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.NonOptionalIssue> | undefined
    >
  | v.NullableSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.DefaultAsync<
        | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
        | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
        null
      >
    >
  | v.NullishSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.DefaultAsync<
        | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
        | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
        null | undefined
      >
    >
  | v.ObjectSchemaAsync<
      v.ObjectEntriesAsync,
      v.ErrorMessage<v.ObjectIssue> | undefined
    >
  | v.ObjectWithRestSchemaAsync<
      v.ObjectEntriesAsync,
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.ObjectWithRestIssue> | undefined
    >
  | v.OptionalSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.DefaultAsync<
        | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
        | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
        undefined
      >
    >
  | v.RecordSchemaAsync<
      | v.BaseSchema<string, string | number | symbol, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<
          string,
          string | number | symbol,
          v.BaseIssue<unknown>
        >,
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.RecordIssue> | undefined
    >
  | v.SetSchemaAsync<
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.SetIssue> | undefined
    >
  | v.StrictObjectSchemaAsync<
      v.ObjectEntriesAsync,
      v.ErrorMessage<v.StrictObjectIssue> | undefined
    >
  | v.StrictTupleSchemaAsync<
      v.TupleItemsAsync,
      v.ErrorMessage<v.StrictTupleIssue> | undefined
    >
  | v.TupleSchemaAsync<
      v.TupleItemsAsync,
      v.ErrorMessage<v.TupleIssue> | undefined
    >
  | v.TupleWithRestSchemaAsync<
      v.TupleItemsAsync,
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
      v.ErrorMessage<v.TupleWithRestIssue> | undefined
    >
  | v.UnionSchemaAsync<
      v.UnionOptionsAsync,
      | v.ErrorMessage<v.UnionIssue<v.InferIssue<v.UnionOptionsAsync[number]>>>
      | undefined
    >
  | v.VariantSchemaAsync<
      string,
      v.VariantOptionsAsync<string>,
      v.ErrorMessage<v.VariantIssue> | undefined
    >;
