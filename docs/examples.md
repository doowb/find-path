## Example #1

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

## Example #2

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
