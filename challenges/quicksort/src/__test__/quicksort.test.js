'use strict';

import quicksort from '../quicksort';

const testArray = [5, 6, 0, 11, 1];

const unsortedArray = [34, 19, 42, 2018, 0, 2005, 77, 2099];

const shortArray = [0];

describe('#quicksort', () => {
  test('testing if mergeSort is stable', () => {
    expect(quicksort(testArray, 0, 4)).toEqual([0, 1, 5, 6, 11]);
  });

  test('testing is mergeSort merges in the correct order', () => {
    expect(quicksort(unsortedArray, 0, 6)).toEqual([0, 19, 34, 42, 77, 2005, 2018, 2099]);
  });

  test('testing if mergeSort returns the correct output if the array is < 2 elements', () => {
    expect(quicksort(shortArray, 0, 0)).toEqual([0]);
  });
});
