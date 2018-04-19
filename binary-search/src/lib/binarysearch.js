'use strict';

const binarysearch = require('binarysearch') = {};

const testArray = [1, 2, 3, 4, 5];
const testKey = 4;

binarysearch.binarySearch = (someArray, key) => {
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] === key) {
      return i;
    }
  }
  return -1;
};

binarySearch(testArray, testKey);
