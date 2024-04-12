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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Studentized Range

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Studentized range distribution.



<section class="usage">

## Usage

```javascript
import tukey from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { cdf, quantile } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@esm/index.mjs';
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
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import tukey from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range@esm/index.mjs';

console.log( objectKeys( tukey ) );

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-studentized-range.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-studentized-range

[test-image]: https://github.com/stdlib-js/stats-base-dists-studentized-range/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-studentized-range/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-studentized-range?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-studentized-range.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-studentized-range/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-studentized-range/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-studentized-range/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-studentized-range/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range/blob/main/branches.md

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/studentized-range/cdf]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/tree/esm

[@stdlib/stats/base/dists/studentized-range/quantile]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
