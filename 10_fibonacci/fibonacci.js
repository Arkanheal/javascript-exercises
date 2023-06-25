const fibonacci = function(a) {
  if (a <= 0) return "OOPS";
  return a < 3 ? 1 : fibonacci(a - 1) + fibonacci(a - 2);
};

// Do not edit below this line
module.exports = fibonacci;
