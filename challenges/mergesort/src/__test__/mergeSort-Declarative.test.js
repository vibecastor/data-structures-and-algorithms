'use strict';

import mergeSort from '../mergesort';
import functionalSort from '../mergeSort-Declarative';

const stableArray = [5, '5', 0, '0', '1', 1];

const unsortedArray = [34, 19, 42, -9, 2018, 0, '0', '2005', 2005, 77, 2099];

const shortArray = [0];

describe('#functionalSort', () => {
  test('testing if functionalSort is stable', () => {
    expect(functionalSort(stableArray)).toEqual([0, '0', '1', 1, 5, '5']);
  });

  test('testing is mergeSort merges in the correct order', () => {
    expect(functionalSort(unsortedArray)).toEqual([-9, 0, '0', 19, 34, 42, 77, '2005', 2005, 2018, 2099]);
  });

  test('testing if mergeSort returns the correct output if the array is < 2 elements', () => {
    expect(functionalSort(shortArray)).toEqual([0]);
  });
});
