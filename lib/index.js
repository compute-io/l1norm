'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );

// L1NORM //

/**
* FUNCTION: l1norm( arr[, accessor] )
*	Calculates the L1 norm (Manhattan/Taxicab norm) of an array.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} L1 norm or null
*/
function l1norm( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'l1norm()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'l1norm()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}

	var len = arr.length,
		sum = 0,
		val,
		i;

	if ( !len ) {
		return null;
	}

	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ], i );
			sum += val < 0 ? -val : val;
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			sum += val < 0 ? -val : val;
		}
	}
	return sum;
} // end FUNCTION l1norm()


// EXPORTS //

module.exports = l1norm;
