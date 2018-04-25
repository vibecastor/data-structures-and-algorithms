'use strict';

function mergeList(list1, list2) {
  const currentNode1 = list1.head;
  const currentNode2 = list2.head;

  if (!list1.head) {
    if (!list2.head) {
      return error;
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

