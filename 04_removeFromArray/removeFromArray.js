const removeFromArray = function(arr, ...elementsToRemove) {
  return arr.filter((element) => {
    return !elementsToRemove.includes(element);
  })
};

// Do not edit below this line
module.exports = removeFromArray;
