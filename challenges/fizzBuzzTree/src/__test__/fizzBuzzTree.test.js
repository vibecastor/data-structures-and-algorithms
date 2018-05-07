'use strict';

import { BinaryTree, Node, fizzBuzzTree } from '../fizzBuzzTree';

const one = new Node(10);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const fifteen = new Node(15);
const mockTree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = fifteen;


console.log('fizzBuzzTree');
fizzBuzzTree(mockTree.root);

describe('fizzBuzzTree', () => {
  test('fizzBuzzTree output', () => {
    console.log(mockTree.value);
    expect(fizzBuzzTree(mockTree)).toEqual('12fizz78fizzbuzzfizz4buzz');
  });
});
