function repeat(operation, num) {
  if (num > 0) {
    operation();
    return repeat(operation, num - 1);
  }
  else {
    return;
  }
}

module.exports = repeat;

/*
official solution

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}
*/