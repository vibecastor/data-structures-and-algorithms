const binarysearch = require('../lib/binarysearch');

describe('BinarySearch should only return a number', () => {
  test('should return a number ', () => {
    expect(binarysearch.binarySearch(3)).toEqual(3);
  });
});