const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, current) => add(acc, current), 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((acc, current) => acc *= current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1
  }
  const arr = [...Array(a).keys()].map((i) => i += 1);
  return multiply(...arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
