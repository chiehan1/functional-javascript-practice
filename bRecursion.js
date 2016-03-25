function reduce(arr, fn, initial) {
  return function recursion(index) {

    if (!arr.length) {
      return initial;
    }
    else {
      return reduce(arr.slice(1), fn, fn(initial, arr[0], index + 1, arr));
    }

  }(0);
}

module.exports = reduce;

/*
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
*/

/*
reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr
}, 0)
// => 6
*/