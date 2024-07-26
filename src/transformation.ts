import type * as v from "valibot";

export type Transformation =
  | v.BrandAction<unknown, v.BrandName>
  | v.FilterItemsAction<v.ArrayInput>
  | v.FindItemAction<v.ArrayInput>
  | v.MapItemsAction<v.ArrayInput, unknown>
  | v.NormalizeAction<v.NormalizeForm | undefined>
  | v.RawTransformAction<unknown, unknown>
  | v.ReadonlyAction<unknown>
  | v.ReduceItemsAction<v.ArrayInput, unknown>
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
