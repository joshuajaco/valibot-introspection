import type * as v from "valibot";

export type Validation =
  | v.Base64Action<string, v.ErrorMessage<v.Base64Issue<string>> | undefined>
  | v.BicAction<string, v.ErrorMessage<v.BicIssue<string>> | undefined>
  | v.BytesAction<
      string,
      number,
      v.ErrorMessage<v.BytesIssue<string, number>> | undefined
    >
  | v.CheckAction<unknown, v.ErrorMessage<v.CheckIssue<unknown>> | undefined>
  | v.CheckItemsAction<
      v.ArrayInput,
      v.ErrorMessage<v.CheckItemsIssue<v.ArrayInput>> | undefined
    >
  | v.CreditCardAction<
      string,
      v.ErrorMessage<v.CreditCardIssue<string>> | undefined
    >
  | v.Cuid2Action<string, v.ErrorMessage<v.Cuid2Issue<string>> | undefined>
  | v.DecimalAction<string, v.ErrorMessage<v.DecimalIssue<string>> | undefined>
  | v.DigitsAction<string, v.ErrorMessage<v.DigitsIssue<string>> | undefined>
  | v.EmailAction<string, v.ErrorMessage<v.EmailIssue<string>> | undefined>
  | v.EmojiAction<string, v.ErrorMessage<v.EmojiIssue<string>> | undefined>
  | v.EmptyAction<
      v.LengthInput,
      v.ErrorMessage<v.EmptyIssue<v.LengthInput>> | undefined
    >
  | v.EndsWithAction<
      string,
      string,
      v.ErrorMessage<v.EndsWithIssue<string, string>> | undefined
    >
  | v.EveryItemAction<
      v.ArrayInput,
      v.ErrorMessage<v.EveryItemIssue<v.ArrayInput>> | undefined
    >
  | v.ExcludesAction<
      v.ContentInput,
      v.ContentRequirement<v.ContentInput>,
      | v.ErrorMessage<
          v.ExcludesIssue<v.ContentInput, v.ContentRequirement<v.ContentInput>>
        >
      | undefined
    >
  | v.FiniteAction<number, v.ErrorMessage<v.FiniteIssue<number>> | undefined>
  | v.HashAction<string, v.ErrorMessage<v.HashIssue<string>> | undefined>
  | v.HexColorAction<
      string,
      v.ErrorMessage<v.HexColorIssue<string>> | undefined
    >
  | v.HexadecimalAction<
      string,
      v.ErrorMessage<v.HexadecimalIssue<string>> | undefined
    >
  | v.ImeiAction<string, v.ErrorMessage<v.ImeiIssue<string>> | undefined>
  | v.IncludesAction<
      v.ContentInput,
      v.ContentRequirement<v.ContentInput>,
      | v.ErrorMessage<
          v.IncludesIssue<v.ContentInput, v.ContentRequirement<v.ContentInput>>
        >
      | undefined
    >
  | v.IntegerAction<number, v.ErrorMessage<v.IntegerIssue<number>> | undefined>
  | v.IpAction<string, v.ErrorMessage<v.IpIssue<string>> | undefined>
  | v.Ipv4Action<string, v.ErrorMessage<v.Ipv4Issue<string>> | undefined>
  | v.Ipv6Action<string, v.ErrorMessage<v.Ipv6Issue<string>> | undefined>
  | v.IsoDateAction<string, v.ErrorMessage<v.IsoDateIssue<string>> | undefined>
  | v.IsoDateTimeAction<
      string,
      v.ErrorMessage<v.IsoDateTimeIssue<string>> | undefined
    >
  | v.IsoTimeAction<string, v.ErrorMessage<v.IsoTimeIssue<string>> | undefined>
  | v.IsoTimeSecondAction<
      string,
      v.ErrorMessage<v.IsoTimeSecondIssue<string>> | undefined
    >
  | v.IsoTimestampAction<
      string,
      v.ErrorMessage<v.IsoTimestampIssue<string>> | undefined
    >
  | v.IsoWeekAction<string, v.ErrorMessage<v.IsoWeekIssue<string>> | undefined>
  | v.LengthAction<
      v.LengthInput,
      number,
      v.ErrorMessage<v.LengthIssue<v.LengthInput, number>> | undefined
    >
  | v.Mac48Action<string, v.ErrorMessage<v.Mac48Issue<string>> | undefined>
  | v.Mac64Action<string, v.ErrorMessage<v.Mac64Issue<string>> | undefined>
  | v.MacAction<string, v.ErrorMessage<v.MacIssue<string>> | undefined>
  | v.MaxBytesAction<
      string,
      number,
      v.ErrorMessage<v.MaxBytesIssue<string, number>> | undefined
    >
  | v.MaxLengthAction<
      v.LengthInput,
      number,
      v.ErrorMessage<v.MaxLengthIssue<v.LengthInput, number>> | undefined
    >
  | v.MaxSizeAction<
      v.SizeInput,
      number,
      v.ErrorMessage<v.MaxSizeIssue<v.SizeInput, number>> | undefined
    >
  | v.MaxValueAction<
      v.ValueInput,
      v.ValueInput,
      v.ErrorMessage<v.MaxValueIssue<v.ValueInput, v.ValueInput>> | undefined
    >
  | v.MimeTypeAction<
      Blob,
      readonly `${string}/${string}`[],
      | v.ErrorMessage<v.MimeTypeIssue<Blob, readonly `${string}/${string}`[]>>
      | undefined
    >
  | v.MinBytesAction<
      string,
      number,
      v.ErrorMessage<v.MinBytesIssue<string, number>> | undefined
    >
  | v.MinLengthAction<
      v.LengthInput,
      number,
      v.ErrorMessage<v.MinLengthIssue<v.LengthInput, number>> | undefined
    >
  | v.MinSizeAction<
      v.SizeInput,
      number,
      v.ErrorMessage<v.MinSizeIssue<v.SizeInput, number>> | undefined
    >
  | v.MinValueAction<
      v.ValueInput,
      v.ValueInput,
      v.ErrorMessage<v.MinValueIssue<v.ValueInput, v.ValueInput>> | undefined
    >
  | v.MultipleOfAction<
      number,
      number,
      v.ErrorMessage<v.MultipleOfIssue<number, number>> | undefined
    >
  | v.NanoIDAction<string, v.ErrorMessage<v.NanoIDIssue<string>> | undefined>
  | v.NonEmptyAction<
      v.LengthInput,
      v.ErrorMessage<v.NonEmptyIssue<v.LengthInput>> | undefined
    >
  | v.NotBytesAction<
      string,
      number,
      v.ErrorMessage<v.NotBytesIssue<string, number>> | undefined
    >
  | v.NotLengthAction<
      v.LengthInput,
      number,
      v.ErrorMessage<v.NotLengthIssue<v.LengthInput, number>> | undefined
    >
  | v.NotSizeAction<
      v.SizeInput,
      number,
      v.ErrorMessage<v.NotSizeIssue<v.SizeInput, number>> | undefined
    >
  | v.NotValueAction<
      v.ValueInput,
      v.ValueInput,
      v.ErrorMessage<v.NotValueIssue<v.ValueInput, v.ValueInput>> | undefined
    >
  | v.OctalAction<string, v.ErrorMessage<v.OctalIssue<string>> | undefined>
  | v.PartialCheckAction<
      Record<string, unknown> | ArrayLike<unknown>,
      Record<string, unknown> | ArrayLike<unknown>,
      | v.ErrorMessage<
          v.PartialCheckIssue<Record<string, unknown> | ArrayLike<unknown>>
        >
      | undefined
    >
  | v.RawCheckAction<unknown>
  | v.RegexAction<string, v.ErrorMessage<v.RegexIssue<string>> | undefined>
  | v.SafeIntegerAction<
      number,
      v.ErrorMessage<v.SafeIntegerIssue<number>> | undefined
    >
  | v.SizeAction<
      v.SizeInput,
      number,
      v.ErrorMessage<v.SizeIssue<v.SizeInput, number>> | undefined
    >
  | v.SomeItemAction<
      v.ArrayInput,
      v.ErrorMessage<v.SomeItemIssue<v.ArrayInput>> | undefined
    >
  | v.StartsWithAction<
      string,
      string,
      v.ErrorMessage<v.StartsWithIssue<string, string>> | undefined
    >
  | v.UlidAction<string, v.ErrorMessage<v.UlidIssue<string>> | undefined>
  | v.UrlAction<string, v.ErrorMessage<v.UrlIssue<string>> | undefined>
  | v.UuidAction<string, v.ErrorMessage<v.UuidIssue<string>> | undefined>
  | v.ValueAction<
      v.ValueInput,
      v.ValueInput,
      v.ErrorMessage<v.ValueIssue<v.ValueInput, v.ValueInput>> | undefined
    >;

export type ValidationAsync =
  | v.CheckActionAsync<
      unknown,
      v.ErrorMessage<v.CheckIssue<unknown>> | undefined
    >
  | v.PartialCheckActionAsync<
      Record<string, unknown> | ArrayLike<unknown>,
      Record<string, unknown> | ArrayLike<unknown>,
      | v.ErrorMessage<
          v.PartialCheckIssue<Record<string, unknown> | ArrayLike<unknown>>
        >
      | undefined
    >
  | v.RawCheckActionAsync<unknown>;
