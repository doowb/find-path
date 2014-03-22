# find-path [![NPM version](https://badge.fury.io/js/find-path.png)](http://badge.fury.io/js/find-path)

> Given a search string and a list of file paths, find the closest path.

## Install

Install with [npm](npmjs.org):

```bash
npm i find-path --save
```


## Options

### all
Type: `Boolean`
Default value: `false`

This returns all of the found paths instead of the "nearest" path.


## Examples

### Example #1

> Find the nearest path for the provided search string.

```js
var findPath = require('find-path');
var search = 'index';
var paths = [
  'foo/bar/baz/about.md',
  'foo/bar/baz/index.md',
  'foo/bar/about.md',
  'foo/bar/index.md',
  'foo/about.md',
  'foo/index.md'
];

var foundPath = findPath(search, paths);
console.log('foundPath: ', foundPath);
```

> Outputs 'foundPath: foo/index.md'

### Example #2

> Find all paths for the provided search string.

```js
var findPath = require('find-path');
var options = {
  all: true
};
var search = 'index';
var paths = [
  'foo/bar/baz/about.md',
  'foo/bar/baz/index.md',
  'foo/bar/about.md',
  'foo/bar/index.md',
  'foo/about.md',
  'foo/index.md'
];

var foundPaths = findPath(search, paths, options);
console.log('foundPaths: ', foundPaths);
```

> Outputs 'foundPaths: foo/bar/baz/index.md,foo/bar/index.md/foo/index.md'


## Author
 * Brian Woodward

## License
Copyright (c) 2014 Brian Woodward, contributors.
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 22, 2014._
