/**
*
*	COMPUTE: l1norm
*
*
*	DESCRIPTION:
*		- Computes the L1 norm (Manhattan norm) of an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// L1NORM //

	/**
	* FUNCTION: l1norm( arr )
	*	Calculates the L1 norm (Manhattan/Taxicab norm) of an array of values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} L1 norm
	*/
	function l1norm( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'l1norm()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			sum = 0,
			val;
		for ( var i = 0; i < len; i++ ) {
			val = arr[ i ];
			// Math.abs( val )
			if ( val < 0 ) {
				val = -val;
			}
			sum += val;
		}
		return sum;
	} // end FUNCTION l1norm()


	// EXPORTS //

	module.exports = l1norm;

})();