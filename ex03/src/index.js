function printManyTimes(str) {
  "use strict";

  const sentence = str + " is cool!";
  for (const i = 0; i < str.lenght; i +=2) {
    console.log(sentence);
  }


  return sentence;
}


printManyTimes("Arena");


module.exports = printManyTimes;
