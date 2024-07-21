import type * as v from "valibot";

export type Transformation =
  | v.BrandAction<unknown, v.BrandName>
  | v.FilterItemsAction<readonly unknown[]>
  | v.FindItemAction<readonly unknown[]>
  | v.MapItemsAction<readonly unknown[], unknown>
  | v.RawTransformAction<unknown, unknown>
  | v.ReadonlyAction<unknown>
  | v.ReduceItemsAction<readonly unknown[], unknown>
  | v.SortItemsAction<readonly unknown[]>
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
