# valibot-introspection

Introspect [valibot](https://github.com/fabian-hiller/valibot) schemas

```ts
import * as v from "valibot";
import { introspect } from "valibot-introspection";

const schema = introspect(v.any());
```
