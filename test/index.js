var expect = require('chai').expect,
    findPath = require('..');

describe('find-path', function() {
  var paths = [
    'foo/bar/baz/about.md',
    'foo/bar/baz/index.md',
    'foo/bar/index.md',
    'foo/bar/about.md',
    'foo/bar/quux.md',
    'foo/index.md',
  ];

  it('find index', function(done) {
    var search = 'index';
    expect(findPath(search, paths)).to.eql('foo/index.md');
    done();
  });

  it('find bar/index', function (done) {
    var search = 'bar/index';
    expect(findPath(search, paths)).to.eql('foo/bar/index.md');
    done();
  });

  it('find beep/boop not found', function (done) {
    var search = 'beep/boop';
    expect(findPath(search, paths)).to.eql(undefined);
    done();
  });

  it('find multiple paths', function (done) {
    var search = 'index';
    var expected = [
      'foo/bar/baz/index.md',
      'foo/bar/index.md',
      'foo/index.md'
    ];

    expect(findPath(search, paths, { all: true })).to.eql(expected);
    done();
  })

});
