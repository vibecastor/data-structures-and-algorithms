'use strict';

export default (someArray, key) => {
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] === key) {
      return i;
    }
  }
  return -1;
};

