## API

The package is available by importing its default function:

```js
import indicatrix from 'indicatrix'
```

%~%

```## async indicatrix => *
[
  ["text", "string"],
  ["promise", "Promise|() => Promise"],
  ["options?", "Options"]
]
```

When called from the CLI application, `indicatrix` will print the supplied text and draw the ellipsis (`.` > `..` > `...` > `.`) animation at the end, until the promise is resolved.

%TYPEDEF types/index.xml%

%EXAMPLE: example/example, ../src => indicatrix%
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
%FORK example/example%

%~%