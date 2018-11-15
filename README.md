# indicatrix

[![npm version](https://badge.fury.io/js/indicatrix.svg)](https://npmjs.org/package/indicatrix)

`indicatrix` Is A CLI Loading Indicator Implemented As A Changing Ellipsis (Triple-Dot).

![ellipsis demo](/images/ellipsis.gif)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

```sh
yarn add -E indicatrix
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async indicatrix(text: string, promise: Promise|() => Promise, options?: Options): *`](#async-indicatrixtext-stringpromise-promise--promiseoptions-options-)
  * [`Options`](#type-options)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import indicatrix from 'indicatrix'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `async indicatrix(`<br/>&nbsp;&nbsp;`text: string,`<br/>&nbsp;&nbsp;`promise: Promise|() => Promise,`<br/>&nbsp;&nbsp;`options?: Options,`<br/>`): *`

When called from the CLI application, `indicatrix` will print the supplied text and draw the ellipsis (`.` > `..` > `...` > `.`) animation at the end, until the promise is resolved.

`import('stream').Writable` __<a name="type-writable">`Writable`</a>__

__<a name="type-options">`Options`</a>__: The optional options for the indicator, such as the refresh interval.

|   Name   |             Type             |                             Description                              |     Default      |
| -------- | ---------------------------- | -------------------------------------------------------------------- | ---------------- |
| interval | _number_                     | The interval with which to update the screen.                        | `250`            |
| writable | _[Writable](#type-writable)_ | The writable stream used for printing data with the `.write` method. | `process.stdout` |

```js
/* yarn example/ */
import indicatrix from 'indicatrix'

(async () => {
  const res = await indicatrix('Please wait', async () => {
    await new Promise(r => setTimeout(r, 750))
    return 'OK'
  }, { interval: 100 })
  console.log(res)
})()
```
```
Please wait.              Please wait..              Please wait...              Please wait              Please wait.              Please wait..              Please wait...              Please wait              OK
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>