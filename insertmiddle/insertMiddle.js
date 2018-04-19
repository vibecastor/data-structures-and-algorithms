'use strict';

// in place solution

const test = [1, 2, 3, 4];

const inPlaceMiddleInsertion = (arr, newValue) => {
  const len = arr.length; // 4
  const mid = Math.floor(len / 2); // 2
  let temp = arr[mid]; // arr[2] = 3
  arr[mid] = newValue; //arr[2] = 3 ==> "IN THE MIDDLE"
  //arr is now [1, 2, 'IN THE MIDDLE', 4] at this point

  for (let i = mid + 1; i <= len; i++) {
    // i = 3, arr[3] = 4
    let otherTemp = arr[i];  // = 4
    arr[i] = temp; // arr[3] = 4 
    console.log(arr, 'before temp is reassigned');
    temp = otherTemp; // temp is still 3, but gets reset to 4
    console.log(arr, 'after temp is reassigned');
  }
  return arr;
};

console.log(inPlaceMiddleInsertion(test, 'IN THE MIDDLE'));
