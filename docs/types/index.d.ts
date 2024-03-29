/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cdf = require( '@stdlib/stats-base-dists-studentized-range-cdf' );
import quantile = require( '@stdlib/stats-base-dists-studentized-range-quantile' );

/**
* Interface describing the `studentized-range` namespace.
*/
interface Namespace {
	/**
	* Cumulative distribution function (CDF) of a studentized range distribution.
	*
	* @param q - quantile of the studentized range
	* @param r - sample size for range (same for each group)
	* @param v - degrees of freedom
	* @param nranges - number of groups whose maximum range is considered (default: 1)
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 2.0, 0.1 );
	* // returns ~0.611
	*
	* y = ns.cdf( 1.0, 2.0 );
	* // returns ~0.789
	*
	* y = ns.cdf( -1.0, 4.0 );
	* // returns ~0.187
	*
	* var mycdf = ns.cdf.factory( 3.0, 2.0 );
	* y = mycdf( 3.0 );
	* // returns ~0.712
	*
	* y = mycdf( 1.0 );
	* // returns ~0.216
	*/
	cdf: typeof cdf;

	/**
	* Evaluates the quantile function for a studentized range distribution at probability `p` with `r` samples and `v` degrees of freedom.
	*
	* @param p - input probability
	* @param r - sample size for range (same for each group; must be greater than or equal to `2`)
	* @param v - degrees of freedom (must be greater than or equal to `2`)
	* @param nranges - number of groups whose maximum range is considered (default: 1)
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.5, 3.0, 2.0 );
	* // returns ~1.908
	*
	* y = ns.quantile( 0.1, 3.0, 4.0 );
	* // returns ~0.627
	*
	* var myquantile = ns.quantile.factory( 3.0, 3.0 );
	*
	* y = myquantile( 0.5 );
	* // returns ~1.791
	*
	* y = myquantile( 0.8 );
	* // returns ~3.245
	*/
	quantile: typeof quantile;
}

/**
* Studentized range distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
