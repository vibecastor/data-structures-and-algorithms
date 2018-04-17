

const array = [1, 2, 3];

function reverseArray(array) {
  const revArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  return (revArray);
}

reverseArray(array);
