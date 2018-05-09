'use strict';

import breadthFirstTraversal from './breadth-first-traversal.test';

const one = new Node(10);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const mockTree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;


console.log(mockTree);
fizzBuzzTree(mockTree.root);

describe('breadthFirstTraversal', () => {
  test('breadthFirstTraversal - this function should output', () => {
    console.log(mockTree.value);
    expect(breadthFirstTraversal(mockTree)).toEqual('123645789');
  });
});
