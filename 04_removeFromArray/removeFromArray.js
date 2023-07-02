const removeFromArray = function (collection, ...args) {
  const newArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (!args.includes(collection[i])) {
      newArray.push(collection[i]);
    }
  }

  return newArray;
};

//let names = ["bob", "teddy", "bear"];
//for (let i = 0; i < names.length; i++) {
// console.log(names[i]);
//}

// Do not edit below this line
module.exports = removeFromArray;
