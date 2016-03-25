function add(x, y) {
  return x + y
}

function partiallyApply(fn, num) {
  return function() {
    return fn.(num, [].slice.call(arguments)[0]);
  }
}

var addTen = partiallyApply(add, 10);

console.log(addTen(20));