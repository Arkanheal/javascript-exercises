const reverseString = function(s) {
  const charArray = s.split(``);

  let resultString = ``;
  for (let i = charArray.length - 1; i >= 0; --i) {
    resultString += charArray[i];
  }

  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
