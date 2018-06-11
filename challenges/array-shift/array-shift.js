const testArray = [1, 2, 3, 4, 5, 6];

const insertShiftArray = (array, newValue) => {
  let middleIndex = Math.ceil(array.length / 2);
  let lastElement = array.length;
  let shiftedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i < middleIndex) {
      shiftedArray[i] = array[i];
    }
    if (i === middleIndex) {
      shiftedArray[i] = newValue;
    }
    if (i > middleIndex) {
      shiftedArray[i] = array[i - 1];
    }
    if (i === array.length - 1) {
      shiftedArray[i + 1] = lastElement;
    }
  }
  return shiftedArray;
};

insertShiftArray(testArray, 10);

// ------------------------
// Algorithm
// ------------------------
// 1 - find the middle index in the array
// 2 - hold the last index value in a temp var
// 3 - declare a new empty array that will hold newly arranged elements
// 4 - iterate through the array
// 5 - nothing changes in the first half of the array so store those elements in the new array
// 6 - when you reach the middle of the array insert the new value into the shiftedArray
// 7 - insert the rest of the elements into the shiftedArray staring with the middleIndex
// 8 - when you reach the last index, insert the stored last element onto the shiftedArray
// 9 - return shiftedArray
// ------------------------
// Complexity
// ------------------------
// time = O(n) where n = the number of elements in the array that have to be shifted
// space = 0(n) where n = the length of the newly created array
