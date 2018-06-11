const twoDimensionalArray = [[1, 2, 1], [2, 4, 2], [3, 6, 8], [7, 8, 1]];

const largestProduct = (array) => {
  let largest = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let current = array[i][j]; // ?
      let right = array[i][j + 1]; // ?
      let diagonal = array[i + 1][j + 1]; // ?
      let down = array[i + 1][j]; // ?

      // if (array[i][j]) {
      //   right = array[i + 1][j + 1]; // ?
      //   down = array[i + 2][j]; // ?
      // }
      // if (array[i + 2][j]) {
      //   right = array[i + 2][j + 1]; // ?
      //   down = array[i + 3][j]; // ?
      // }
      if (current * right > largest) {
        largest = current * right; // ?
      }
      if (current * diagonal > largest) {
        largest = current * diagonal; // ?
      }
      if (current * down > largest) {
        largest = current * down; // ?
      }
    }
    return largest; // ?
  }
  return largest; // ?
}

largestProduct(twoDimensionalArray); // ?

// ------------------------
// Algorithm
// ------------------------
// 1 -
// ------------------------
// Complexity
// ------------------------
// time =
// space =
