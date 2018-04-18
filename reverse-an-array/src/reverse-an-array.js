'use strict';

const array = [1, 2, 3];

function reverseArray(arr) {
  const revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return (revArray);
}

reverseArray(array);
