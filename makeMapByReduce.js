module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr) {
    prev.push(fn(curr));
    return prev;
  }, []);
};

/*
module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}
*/