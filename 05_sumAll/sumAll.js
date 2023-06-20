const sumAll = function(x, y) {
  if (typeof x !== `number` || typeof y !== `number` || x < 0 || y < 0) {
    return `ERROR`;
  }

  const max = Math.max(x, y);
  const min = Math.min(x, y);

  let result = 0;
  for (let i = min; i <= max; ++i) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
