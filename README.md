<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Studentized Range

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Studentized range distribution.



<section class="usage">

## Usage

To use in Observable,

```javascript
tukey = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-studentized-range/tags). For example,

```javascript
tukey = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var tukey = require( 'path/to/vendor/umd/stats-base-dists-studentized-range/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.tukey;
})();
</script>
```

#### tukey

[Studentized range][studentized-range] distribution.

```javascript
var dist = tukey;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, r, v[, nranges=1] )`][@stdlib/stats/base/dists/studentized-range/cdf]</span><span class="delimiter">: </span><span class="description">Studentized range distribution cumulative distribution function (CDF).</span>
-   <span class="signature">[`quantile( p, r, v[, nranges=1] )`][@stdlib/stats/base/dists/studentized-range/quantile]</span><span class="delimiter">: </span><span class="description">Studentized range distribution quantile function.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( tukey ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-studentized-range.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-studentized-range

[test-image]: https://github.com/stdlib-js/stats-base-dists-studentized-range/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-studentized-range/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-studentized-range?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-studentized-range.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-studentized-range/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-studentized-range/main/LICENSE

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/studentized-range/cdf]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/tree/umd

[@stdlib/stats/base/dists/studentized-range/quantile]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
