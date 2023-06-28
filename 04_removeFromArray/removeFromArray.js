const removeFromArray = function (collection, ...args) {
  const newArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (!args.includes(collection[i])) {
      newArray.push(collection[i]);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
