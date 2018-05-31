'use strict';

const string = 'hello, my little friend! hello!?.';

const repeatedWord = (longString) => {
  let splitString = string.split(/[,.!?\s]+/);
  // console.log(splitString);

  let collection = new Map();
  for (let word of longString) {
    map[word] = 1;
  }
};
