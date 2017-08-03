# float.flow
[![travis][travis.icon]][travis.url]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]


Library provides `float` [opquae type alias][] for `number` and set of functions
to work with `float` type values.


## API


### Import

```js
import * as Float from "float.flow"
```

### `Float.float:number`

Library exposes `float`, a subtype of a `number`.

### `Float.parseFloat(string):?float`

Try to turn given string into a `float`, unlike built-in `parseFloat` this function never return `NaN` or an `Infinity`, but rather retuns `null` (`?` portion of `?float`). It also unlike built-in `parseFloat` fails (returns `null`) on strings than aren't numbers like `"0what?"`.

```js
Float.parseFloat("123") //> 123
Float.parseFloat("3.14") //> 3.14
Float.parseFloat("3.14") //> 3.14
Float.parseFloat("+3.14") //> 3.14
Float.parseFloat("-3.14") //> -3.14
Float.parseFloat("0") //> 0
Float.parseFloat(".0") // > 0
Float.parseFloat("NaN") //> null
Float.parseFloat("-Infinity") //> null
Float.parseFloat("Infinity") //> null
Float.parseFloat("0xFF") //> null
Float.parseFloat("0what?") //> null
```

### `Float.toFloat(number):float`

Turns any number into a `float`. Useful for working with APIs that require `float` type argument instead of `number`.

```js
Float.toFloat(0) //> 0
Float.toFloat(1 / 2) // 1.5
Float.toFloat(0 / 0) //> NaN
Float.toFloat(1 / 0) // Infinity
```
### `Float.isNaN(number):boolean`

Returns `true` if given `number` is `NaN`. Just an alias for JS built-in `isNaN`.

```js
Float.isNaN(0 / 0) //> true
Float.isNaN(NaN * 2) //> true
Float.isNaN(Infinity) //> false
Float.isNaN(3) //> false
```

### `Float.isFinite(number):boolean`

Return `true` if given `number` is finite (is neither `NaN` nor (`-`)`Infinity`). It is just an alias for built-in `isFinite`.

```js
Float.isFinite(0 / 0) //> false
Float.isFinite(1 / 0) //> false
Float.isFinite(Infinity) //> false
Float.isFinite(-Infinity) //> false
Float.isFinite(NaN) //> false
Float.isFinite(.0) //> true
Float.isFinite(1 / 8) //> true
Float.isFinite(7) //> true
```

## Install

    npm install float.flow

[opquae type alias]:https://flow.org/en/docs/types/opaque-types/

[travis.icon]: https://travis-ci.org/Gozala/float.flow.svg?branch=master
[travis.url]: https://travis-ci.org/Gozala/float.flow

[version.icon]: https://img.shields.io/npm/v/float.flow.svg
[downloads.icon]: https://img.shields.io/npm/dm/float.flow.svg
[package.url]: https://npmjs.org/package/float.flow


[downloads.image]: https://img.shields.io/npm/dm/float.flow.svg
[downloads.url]: https://npmjs.org/package/float.flow

[prettier.icon]:https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]:https://github.com/prettier/prettier