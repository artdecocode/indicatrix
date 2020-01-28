## API

The package is available by importing its default function:

```js
import indicatrix from 'indicatrix'
```

%~%

<typedef noArgTypesInToc name="indicatrix">types/api.xml</typedef>

When called from the CLI application, `indicatrix` will print the supplied text and draw the ellipsis (`.` > `..` > `...` > `.`) animation at the end, until the promise is resolved.

<typedef>types/index.xml</typedef>

%EXAMPLE: example, ../src => indicatrix%
```
Please wait.
Please wait..
Please wait...
Please wait
Please wait.
Please wait..
Please wait...
Please wait
```
<fork env="INDICATRIX_PLACEHOLDER=0">example</fork>

%~%

## `INDICATRIX_PLACEHOLDER` env

When the `INDICATRIX_PLACEHOLDER` is set to anything other than `0`, the package won't print the `...` ellipsis, but append the static `<INDICATRIX_PLACEHOLDER>` string to the loading text instead. This is used by [documentary](https://artdecocode.com/documentary/) to add an interactive placeholder:

<fork>example</fork>

%~%