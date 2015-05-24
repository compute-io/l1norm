/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	l1norm = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-l1norm', function tests() {

	it( 'should export a function', function test() {
		expect( l1norm ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				NaN,
				true,
				{},
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				l1norm( value );
			};
		}
	});

	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				l1norm( [1,2,3], value );
			};
		}
	});

	it( 'should return the L1 norm', function test() {
		var data, expected;

		data = [ 3, -4, -1, 5, 0, 1 ];
		expected = 14;

		assert.strictEqual( l1norm( data ), expected );
	});

	it( 'should compute the L1 norm using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':3},
			{'x':-4},
			{'x':-1},
			{'x':5},
			{'x':0},
			{'x':1}
		];

		actual = l1norm( data, getValue );
		expected = 14;

		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});


	it( 'should return null if provided an empty array', function test() {
		assert.isNull( l1norm( [] ) );
	});


});
