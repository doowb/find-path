'use strict';

const endsWith = require('path-ends-with');

module.exports = function(filename, paths, options) {
  const opts = Object.assign({}, options);
  const matches = [];

  if (opts.shortest === true) {
    paths = sortPaths(paths);
    opts.all = false;
  }

  for (const filepath of paths) {
    if (endsWith(filepath, filename)) {
      matches.push(filepath);
      if (opts.all !== true) {
        break;
      }
    }
  }

  return matches;
};

function sortPaths(paths) {
  return paths.sort((a, b) => {
    const alen = a.split(/[\\/]/).length;
    const blen = b.split(/[\\/]/).length;
    if (alen < blen) return -1;
    if (alen > blen) return 1;
    return 0;
  });
}
