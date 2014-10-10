L1 norm
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the L1 norm ([Manhattan/Taxicab norm](http://en.wikipedia.org/wiki/Norm_(mathematics))) of an array of values.


## Installation

``` bash
$ npm install compute-l1norm
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var l1norm = require( 'compute-l1norm' );
```


#### l1norm( arr )

Computes the _L1_ norm (Manhattan/Taxicab norm) of an array of values.

``` javascript
var data = [ 2, 7, 3, -3, 9 ];

var norm = l1norm( data );
// returns 24
```


## Examples

``` javascript
var l1norm = require( 'compute-l1norm' );

var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*100 - 50;
}

console.log( l1norm( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-l1norm.svg
[npm-url]: https://npmjs.org/package/compute-l1norm

[travis-image]: http://img.shields.io/travis/compute-io/l1norm/master.svg
[travis-url]: https://travis-ci.org/compute-io/l1norm

[coveralls-image]: https://img.shields.io/coveralls/compute-io/l1norm/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/l1norm?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/l1norm.svg
[dependencies-url]: https://david-dm.org/compute-io/l1norm

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/l1norm.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/l1norm

[github-issues-image]: http://img.shields.io/github/issues/compute-io/l1norm.svg
[github-issues-url]: https://github.com/compute-io/l1norm/issues