'use strict';

let storage = 0;

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  // pre-order is root - left - right
  // -----------------
  console.log(`Visiting a node with value ${rootNode.value}`);
  if (rootNode.value > storage) {
    storage = rootNode.value;
  }
  // -----------------
  preOrderTraversal(rootNode.left); // rootNode.left is a is a sub-tree
  preOrderTraversal(rootNode.right);
  return storage;
};


const findMaximumValue = (tree) => {
  if (!tree) {
    return undefined;
  }
  if (!tree.root) {
    return undefined;
  }
  return preOrderTraversal(tree.root);
};

export { findMaximumValue };
