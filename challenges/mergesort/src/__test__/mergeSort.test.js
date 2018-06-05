'use strict';

import mergeSort from '../mergesort';

const stableArray = [5, '5', 0, '0', '1', 1];

const unsortedArray = [34, 19, 42, -9, 2018, 0, '0', '2005', 2005, 77, 2099];

const shortArray = [0];

describe('#mergeSort', () => {
  test('testing if mergeSort is stable', () => {
    expect(mergeSort(stableArray)).toEqual([0, '0', '1', 1, 5, '5']);
  });

  test('testing is mergeSort merges in the correct order', () => {
    expect(mergeSort(unsortedArray)).toEqual([-9, 0, '0', 19, 34, 42, 77, '2005', 2005, 2018, 2099]);
  });

  test('testing if mergeSort returns the correct output if the array is < 2 elements', () => {
    expect(mergeSort(shortArray)).toEqual([0]);
  });
});
