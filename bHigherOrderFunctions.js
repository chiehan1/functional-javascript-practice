function repeats(operation, num) {
  if (0 === num) {
    return;
  }
  else {
    operation();
    repeats(operation, num - 1);
  }
}

module.exports = repeats;

/*
function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

module.exports = repeat
*/