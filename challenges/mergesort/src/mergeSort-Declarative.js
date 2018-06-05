'use strict';

import mergeSort from './mergesort';

const testArray = [34, 19, 42, -9, 2018, 0, '0', '2005', 2005, 77, 2099];

const functionalSort = (array) => {
  const split = (array) => {
    const middle = array.length >> 1; // ?
    return [array.slice(0, middle), array.slice(middle)]; // ?
  };

  const merge = function* generator(a, b) {
    while (a.length && b.length) {
      yield a[0] <= b[0] ? a.shift() : b.shift();
    }

    yield* a;
    yield* b;
  };

  switch (array.length) {
    case 0:
    case 1:
      return array.slice(); // ?
    default:
      return [...merge(...split(array).map(functionalSort))]; // ?
  }
};

functionalSort(testArray); // ?

export default mergeSort;
