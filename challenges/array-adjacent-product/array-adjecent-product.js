const twoDimensionalArray = [[1, 2, 1], [2, 4, 2], [3, 6, 8], [7, 8, 1]];

const largestProduct = (array) => {
  let largest = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let center = array[i][j + 1]; // ?
      let right = array[i][j + 2]; // ?
      let lowerRight = array[i + 1][j + 2]; // ?
      // cannot read property '2' of undefined for lowerRight....
      let down = array[i + 1][j + 1]; // ?
      let lowerLeft = array[i + 1][j - 1]; // ?
      let left = array[i][j - 1]; // ?
      let upperLeft = array[i][j]; // ?
      let up = array[i][j + 1]; // ?
      let upperRight = array[i][j + 2]; // ?

      if (center * right > largest) {
        console.log(center);
        console.log(right);
        largest = center * right; // ?
      }
      if (center * lowerRight > largest) {
        console.log(center);
        console.log(lowerRight);
        largest = center * lowerRight; // ?
      }
      if (center * down > largest) {
        console.log(center);
        console.log(down);
        largest = center * down; // ?
      }
      if (center * lowerLeft > largest) {
        console.log(center);
        console.log(down);
        largest = center * lowerLeft; // ?
      }
      if (center * left > largest) {
        console.log(center);
        console.log(left);
        largest = center * left; // ?
      }
      if (center * upperLeft > largest) {
        console.log(center);
        console.log(upperLeft);
        largest = center * upperLeft; // ?
      }
      if (center * up > largest) {
        console.log(center);
        console.log(up);
        largest = center * up; // ?
      }
      if (center * upperRight > largest) {
        console.log(center);
        console.log(upperRight);
        largest = center * upperRight; // ?
      }
      console.log(largest);
      // return largest; // ?
      // you are getting 64 here but not able to return it outside the loop
    }
    // return largest; // ?
    // you are getting 64 here but not able to return it outside the loop
    console.log(largest);
  }
  return largest; // ?
  // no output here...
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
