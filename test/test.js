'use strict';

const assert = require('assert');
const findPath = require('..');

describe('find-path', function() {
  const paths = [
    'foo/bar/baz/about.md',
    'foo/bar/baz/index.md',
    'foo/bar/index.md',
    'foo/bar/about.md',
    'foo/bar/quux.md',
    'foo/index.md',
  ];

  it('should find the shorted path', function() {
    assert.deepEqual(findPath('index.md', paths, { shortest: true }), ['foo/index.md']);
  });

  it('should find bar/index', function() {
    assert.deepEqual(findPath('bar/index.md', paths), ['foo/bar/index.md']);
  });

  it('should find baz/qux not found', function() {
    assert.deepEqual(findPath('baz/qux', paths), []);
  });

  it('should find all matching paths', function() {
    const expected = ['foo/index.md', 'foo/bar/index.md', 'foo/bar/baz/index.md'];
    assert.deepEqual(findPath('index.md', paths, { all: true }), expected);
  })
});
