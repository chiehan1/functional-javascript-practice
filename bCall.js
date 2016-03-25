function duckCount() {
  //console.log(arguments);
  return [].filter.call(arguments, function(arg) {
    return {}.hasOwnProperty.call(arg, 'quack');
  }).length;

}

module.exports = duckCount;

/*
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount
*/