import swap from './swap';

const partition = (array, pivot, left, right) => { // ?
  const pivotValue = array[pivot]; // ?
  let partitionIndex = left; // ?

  for (let i = left; i < right; i++) { // ?
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex += 1;
    }
  }
  swap(array, right, partitionIndex); // ?
  return partitionIndex; // ?
};

export default partition;
