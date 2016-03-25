function sum() {
  return [].slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  });
}

function add(x, y) {
  console.log(arguments);
  return x + y;
}

function partiallyApply(fn, num) {
  return fn.bind(this, num);
}

var sumTen = partiallyApply(sum, 10);
var addTen = partiallyApply(add, 10);

console.log(sumTen(20, 30));
console.log(addTen(20));