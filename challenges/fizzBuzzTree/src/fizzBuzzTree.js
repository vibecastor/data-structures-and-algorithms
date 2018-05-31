'user strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const fizzString = 'fizz';
const buzzString = 'buzz';
const fizzBuzzString = 'fizzbuzz';
let outputString = '';

const fizzBuzzTree = (rootNode) => {
  if (!rootNode) {
    return outputString;
  }
  if (rootNode.value % 3 === 0) {
    rootNode.value = fizzString;
  }
  if (rootNode.value % 5 === 0) {
    rootNode.value = buzzString;
  }
  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = fizzBuzzString;
  }
  outputString += rootNode.value;
  console.log(`Visiting a node with value ${rootNode.value}`);
  // -----------------
  fizzBuzzTree(rootNode.left);
  fizzBuzzTree(rootNode.right);
  return outputString;
};

export { BinaryTree, Node, fizzBuzzTree };
