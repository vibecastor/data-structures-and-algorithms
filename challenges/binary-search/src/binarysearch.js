'use strict';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchKey = 5;

const binarySearch = (sortedArray, key) => {

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === key) {
      return sortedArray[i];
    }
  }
  return -1;
};

binarySearch(testArray, searchKey);

// ------------------------
// Algorithm
// ------------------------
// 1 - iterate of the length of the array
// 2 - compare the elements as you iterate against the search key
// 3 - if an element is equal to a search key return that element
// 4 - if you reach the end of the array with no matches return -1
// ------------------------
// Complexity
// ------------------------
// time = O(n) where n = the length of the array
// space = O(1) which is the array itself
