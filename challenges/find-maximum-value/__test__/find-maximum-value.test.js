'use strict';

import BinaryTree from '../binary-tree';
import Node from '../node';
import { findMaximumValue } from '../find-maximum-value';

const one = new Node(1);
const two = new Node(2);
const three = new Node(2);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = six;
three.left = seven;

console.log('findMaximumValue');
findMaximumValue(tree.root);

describe('Binary Tree Method, findMaximumValue', () => {
  test('testing the output of findMaximumValue', () => {
    expect(findMaximumValue(tree)).toEqual(7);
  });
  test('testing the output of findMaximumValue', () => {
    expect(findMaximumValue(tree)).not.toBe(null);
  });
  test('testing the output of findMaximumValue', () => {
    expect(findMaximumValue(tree)).not.toBe(undefined);
  });
});
