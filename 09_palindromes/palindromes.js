const palindromes = function (a) {
  let str = a.trim().toLowerCase();
  str = Array.from(str).filter((c) => {
    const code = c.charCodeAt(0);
    return (code > 47 && code < 58) ||(code > 96 && code < 123)
  });
  const strReversed = str.slice().reverse();
  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== strReversed[i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
