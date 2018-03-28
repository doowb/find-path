const endsWith = require('path-ends-with');

module.exports = function(filename, paths, options = {}) {
  const matches = [];

  if (options.shortest === true) {
    paths = sortPaths(paths);
    options.all = false;
  }

  for (const filepath of paths) {
    if (endsWith(filepath, filename)) {
      matches.push(filepath);
      if (options.all !== true) {
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
