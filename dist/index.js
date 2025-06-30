/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace tukey
*/
var tukey = {};

/**
* @name cdf
* @memberof tukey
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/studentized-range/cdf}
*/
setReadOnly( tukey, 'cdf', require( '@stdlib/stats-base-dists-studentized-range-cdf/dist' ) );

/**
* @name quantile
* @memberof tukey
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/studentized-range/quantile}
*/
setReadOnly( tukey, 'quantile', require( '@stdlib/stats-base-dists-studentized-range-quantile/dist' ) );


// EXPORTS //

module.exports = tukey;
