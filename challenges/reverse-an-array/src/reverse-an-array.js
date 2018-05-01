'use strict';

// const array = [1, 2, 3];

// function reverseArray(arr) {
//   const revArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArray.push(arr[i]);
//   }
//   return (revArray);
// }

// reverseArray(array);

const reverse = (arr) => {
  const len = arr.length;
  const mid = Math.floor(len / 2);
  let temp;

  for (let i = 0; i < mid; i++) {
    temp = arr[i];
    arr[i] = arr[len - 1 - i]; // swapping?
    arr[len - 1 - i] = temp;
  }
  return arr;
};

const test = [1, 2, 3, 4, 5];
console.log(reverse(test));
