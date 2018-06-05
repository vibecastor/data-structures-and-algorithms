'use strict';

const unsortedArray = [3, 2, 1, 4];

function merge(left, right) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left[0]); // ?
      left = left.slice(1); // ?
    } else {
      sortedArray.push(right[0]); // ?
      right = right.slice(1); // ?
    }
  }
  while (left.length) {
    sortedArray.push(left.shift()); // ?
  }
  while (right.length) {
    sortedArray.push(right.shift()); // ?
  }
  return sortedArray; // ?
}

function mergeSort(array) {
  if (array.length < 2) {
    return array; // ?
  }
  
  const midpoint = parseInt(array.length / 2, 10); // ?
  const left = array.slice(0, midpoint); // ?
  const right = array.slice(midpoint, array.length); // ?
  return merge(mergeSort(left), mergeSort(right)); //?
}

mergeSort(unsortedArray); // ?

export default mergeSort;
