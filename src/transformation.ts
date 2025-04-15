import type * as v from "valibot";

export type Transformation =
  | v.ArgsAction<
      (...args: any[]) => unknown,
      | v.LooseTupleSchema<
          v.TupleItems,
          v.ErrorMessage<v.LooseTupleIssue> | undefined
        >
      | v.StrictTupleSchema<
          v.TupleItems,
          v.ErrorMessage<v.StrictTupleIssue> | undefined
        >
      | v.TupleSchema<v.TupleItems, v.ErrorMessage<v.TupleIssue> | undefined>
      | v.TupleWithRestSchema<
          v.TupleItems,
          v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
          v.ErrorMessage<v.TupleWithRestIssue> | undefined
        >
    >
  | v.ArgsActionAsync<
      (...args: any[]) => unknown,
      | v.LooseTupleSchema<
          v.TupleItems,
          v.ErrorMessage<v.LooseTupleIssue> | undefined
        >
      | v.LooseTupleSchemaAsync<
          v.TupleItemsAsync,
          v.ErrorMessage<v.LooseTupleIssue> | undefined
        >
      | v.StrictTupleSchema<
          v.TupleItems,
          v.ErrorMessage<v.StrictTupleIssue> | undefined
        >
      | v.StrictTupleSchemaAsync<
          v.TupleItemsAsync,
          v.ErrorMessage<v.StrictTupleIssue> | undefined
        >
      | v.TupleSchema<v.TupleItems, v.ErrorMessage<v.TupleIssue> | undefined>
      | v.TupleSchemaAsync<
          v.TupleItemsAsync,
          v.ErrorMessage<v.TupleIssue> | undefined
        >
      | v.TupleWithRestSchema<
          v.TupleItems,
          v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
          v.ErrorMessage<v.TupleWithRestIssue> | undefined
        >
      | v.TupleWithRestSchemaAsync<
          v.TupleItemsAsync,
          | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
          | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>,
          v.ErrorMessage<v.TupleWithRestIssue> | undefined
        >
    >
  | v.BrandAction<unknown, v.BrandName>
  | v.FilterItemsAction<v.ArrayInput>
  | v.FindItemAction<v.ArrayInput, v.ArrayInput[number]>
  | v.MapItemsAction<v.ArrayInput, unknown>
  | v.NormalizeAction<v.NormalizeForm | undefined>
  | v.RawTransformAction<unknown, unknown>
  | v.ReadonlyAction<unknown>
  | v.ReduceItemsAction<v.ArrayInput, unknown>
  | v.ReturnsAction<
      (...args: any[]) => unknown,
      v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
    >
  | v.ReturnsActionAsync<
      (...args: any[]) => unknown,
      | v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
      | v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>
    >
  | v.SortItemsAction<v.ArrayInput>
  | v.ToLowerCaseAction
  | v.ToMaxValueAction<v.ValueInput, v.ValueInput>
  | v.ToMinValueAction<v.ValueInput, v.ValueInput>
  | v.ToUpperCaseAction
  | v.TransformAction<unknown, unknown>
  | v.TrimAction
  | v.TrimEndAction
  | v.TrimStartAction;

export type TransformationAsync =
  | v.AwaitActionAsync<Promise<unknown>>
  | v.RawTransformActionAsync<unknown, unknown>
  | v.TransformActionAsync<unknown, unknown>;
