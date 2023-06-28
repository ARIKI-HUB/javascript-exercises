const repeatString = function (str, times) {
  if (times < 0) {
    return "ERROR";
  }

  let resultstr = "";
  for (i = 0; i < times; i++) {
    resultstr += str;
  }
  console.log(resultstr);
  return resultstr;
};

// Do not edit below this line
module.exports = repeatString;
