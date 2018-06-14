'use strict';

const Node = require('./node');
const LinkedList = require('./linked-list');

const firstList = new LinkedList();
const secondList = new LinkedList();

function mergeList(list1, list2) {
  const currentNode1 = list1.head;
  const currentNode2 = list2.head;

  if (!list1.head) {
    if (!list2.head) {
      throw new Error('__ERROR__ The list is empty'); // Judy requested that we return error as opposed to undefined.
    }
    return list2;
  }
  if (!list2.head) {
    return list1;
  }
  let temp1 = 0;
  let temp2 = 0;

  while (currentNode.next) {
    temp1 = currentNode.next;
    currentNode1.next = currentNode2;
    currentNode1.next.next = temp1;
    temp2 = currentNode1.next;
    currentNode1.next = currentNode2.next;
    currentNode1.next.next = temp2;
  }
  return list1;
}

mergeList(firstList, secondList);
