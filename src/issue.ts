import type * as v from "valibot";

export type Issue =
  | v.ArrayIssue
  | v.BicIssue<string>
  | v.BigintIssue
  | v.BlobIssue
  | v.BooleanIssue
  | v.BytesIssue<string, number>
  | v.CheckIssue<unknown>
  | v.CheckItemsIssue<readonly unknown[]>
  | v.CreditCardIssue<string>
  | v.Cuid2Issue<string>
  | v.CustomIssue
  | v.DateIssue
  | v.DecimalIssue<string>
  | v.EmailIssue<string>
  | v.EmojiIssue<string>
  | v.EmptyIssue<v.LengthInput>
  | v.EndsWithIssue<string, string>
  | v.EnumIssue
  | v.EveryItemIssue<readonly unknown[]>
  | v.ExcludesIssue<v.ContentInput, v.ContentRequirement<v.ContentInput>>
  | v.FileIssue
  | v.FiniteIssue<number>
  | v.FunctionIssue
  | v.HashIssue<string>
  | v.HexColorIssue<string>
  | v.HexadecimalIssue<string>
  | v.ImeiIssue<string>
  | v.IncludesIssue<v.ContentInput, v.ContentRequirement<v.ContentInput>>
  | v.InstanceIssue
  | v.IntegerIssue<number>
  | v.IntersectIssue
  | v.IpIssue<string>
  | v.Ipv4Issue<string>
  | v.Ipv6Issue<string>
  | v.IsoDateIssue<string>
  | v.IsoDateTimeIssue<string>
  | v.IsoTimeIssue<string>
  | v.IsoTimeSecondIssue<string>
  | v.IsoTimestampIssue<string>
  | v.IsoWeekIssue<string>
  | v.LengthIssue<v.LengthInput, number>
  | v.LiteralIssue
  | v.LooseObjectIssue
  | v.LooseTupleIssue
  | v.Mac48Issue<string>
  | v.Mac64Issue<string>
  | v.MacIssue<string>
  | v.MapIssue
  | v.MaxBytesIssue<string, number>
  | v.MaxLengthIssue<v.LengthInput, number>
  | v.MaxSizeIssue<v.SizeInput, number>
  | v.MaxValueIssue<v.ValueInput, v.ValueInput>
  | v.MimeTypeIssue<Blob, readonly `${string}/${string}`[]>
  | v.MinBytesIssue<string, number>
  | v.MinLengthIssue<v.LengthInput, number>
  | v.MinSizeIssue<v.SizeInput, number>
  | v.MinValueIssue<v.ValueInput, v.ValueInput>
  | v.MultipleOfIssue<number, number>
  | v.NanIssue
  | v.NeverIssue
  | v.NonEmptyIssue<v.LengthInput>
  | v.NonNullableIssue
  | v.NonNullishIssue
  | v.NonOptionalIssue
  | v.NotBytesIssue<string, number>
  | v.NotLengthIssue<v.LengthInput, number>
  | v.NotSizeIssue<v.SizeInput, number>
  | v.NotValueIssue<v.ValueInput, v.ValueInput>
  | v.NullIssue
  | v.NumberIssue
  | v.ObjectIssue
  | v.ObjectWithRestIssue
  | v.OctalIssue<string>
  | v.PartialCheckIssue<unknown>
  | v.PicklistIssue
  | v.PromiseIssue
  | v.RawCheckIssue<unknown>
  | v.RawTransformIssue<unknown>
  | v.RecordIssue
  | v.RegexIssue<string>
  | v.SafeIntegerIssue<number>
  | v.SetIssue
  | v.SizeIssue<v.SizeInput, number>
  | v.SomeItemIssue<readonly unknown[]>
  | v.StartsWithIssue<string, string>
  | v.StrictObjectIssue
  | v.StrictTupleIssue
  | v.StringIssue
  | v.SymbolIssue
  | v.TupleIssue
  | v.TupleWithRestIssue
  | v.UlidIssue<string>
  | v.UndefinedIssue
  | v.UnionIssue<v.BaseIssue<unknown>>
  | v.UrlIssue<string>
  | v.UuidIssue<string>
  | v.ValueIssue<v.ValueInput, v.ValueInput>
  | v.VariantIssue
  | v.VoidIssue;
