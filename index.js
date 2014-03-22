

module.exports = function (search, paths, options) {

  options = options || {};
  options.all = options.all || false;

  // filter paths
  var filtered = filter(search, paths);

  if (options.all) {
    return filtered;
  } else {
    // find shortest segment
    return findShortest(filtered);
  }
};

function filter (search, paths) {
  var results = [];
  for (var i = 0; i < paths.length; i++) {
    if (paths[i].indexOf(search) !== -1) {
      results.push(paths[i]);
    }
  }
  return results;
}

function findShortest(paths) {
  var sortFn = function (a, b) {
    return a.split('/').length > b.split('/').length;
  };
  paths.sort(sortFn);
  return paths[0];
}
