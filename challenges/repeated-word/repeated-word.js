'use strict';

const string = 'say hello, to my little friend! hello!?.';

// let splitString = string.replace(/(\.|,|\?|!)/g, '').split(/\s/); // ?


const repeatedWord = (longString) => {
  const splitString = longString.replace(/(\.|,|\?|!)/g, '').split(/\s/); // ?

  const collection = new Map(); // ?
  collection.set(splitString); // ?

  for (let values of collection) {
    console.log(values);

  }




  // for (let i = 0; i < splitString.length; i++) {
  //   collection.set(splitString); // ?
  //
  //   if (current === splitString[i ++]) {
  //     return current;
  //   }
  // // }
  // console.log(collection.has('hello'));
  return;
}

repeatedWord(string); // ?

export default repeatedWord;
