const repeatString = function(s, n) {
  if (n < 0) {
    return `ERROR`;
  }

  let resultString = ``;

  for (let i = 0; i < n; ++i) {
    resultString += s;
  }

  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
