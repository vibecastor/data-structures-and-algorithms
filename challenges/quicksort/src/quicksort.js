import partition from './partition';

const testArray = [2, 4, 1, 5, 7];

const quickSort = (array, left, right) => {
  let pivot = null;
  let partitionIndex = null;

  if (left < right) {
    pivot = right; // ?
    partitionIndex = partition(array, pivot, left, right); // ?

    // sort left and right
    quickSort(array, left, partitionIndex - 1); // ?
    quickSort(array, partitionIndex + 1, right); // ?
  }
  return array; // ?
};

quickSort(testArray, 0, 4); // ?

export default quickSort;
