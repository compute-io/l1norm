var l1norm = require( './../lib' );

var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*100 - 50;
}

console.log( l1norm( data ) );