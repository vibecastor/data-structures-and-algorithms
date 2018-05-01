'use strict';

const array = [[1, 2], [3, 4], [5, 6], [7, 8]];

let product1 = 0;
let product2 = 0;
let product3 = 0;
let product4 = 0;

let product5 = 0;
let product6 = 0;

const largestProduct = (sourceArray) => {
  for (let a = 0; a < sourceArray.length; a++) {
    for (let b = 0; b < sourceArray.length; b++) {
      const pOne = sourceArray[a - 1][b];
      const pTwo = sourceArray[a][b];
      const pThree = sourceArray[a + 1][b];
      const pFour = sourceArray[a][b - 1];
      const pFive = sourceArray[a][b + 1];
      if (pOne * pTwo > pTwo * pThree) {
        product1 = pOne * pTwo; 
      }
      if (pTwo * pThree > pThree * pFour) {
        product2 = pTwo * pThree; 
      }
      if (pThree * pFour > pFour * pFive) {
        product3 = pThree * pFour; 
      }
      if (pFour * pFive > pFive * pOne) {
        product4 = pFour * pFive; 
      }
      if (product1 > product2) {
        product5 = product1;
      } else { product5 = product2; }
      if (product3 > product4) {
        product6 = product3;
      } else product6 = product4;
      if (product5 > product6) {
        let finalProduct = product5;
      } else finalProduct = product6;
    }
  }
  return finalProduct;
};

largestProduct(array);
