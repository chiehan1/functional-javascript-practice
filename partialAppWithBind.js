module.exports = function(namespace) {
  return function() {
    console.log(namespace, Function.prototype.call.bind(Array.prototype.slice)(arguments).join(' '));
  };
};

/*
module.exports = function(namespace) {
  return console.log.bind(console, namespace)
}
*/