import Node from './node';
import LinkedList from './linked-list';

const testList = new LinkedList();
let testList2 = null;// ?
testList.append(1); // ?
testList.append(2);
testList.append(3);// ?
testList.append(4);
console.log(testList.head.value);
console.log(testList.head.next.value);
console.log(testList.head.next.next.value);
console.log(testList.head.next.next.next.value);
// console.log(testList.reverse());

testList2 = testList; // ?


const reverseList = () => {
  let currentNode = testList.head; // ?

  let next = null;
  let last = null;

  if (!testList.head) {
    throw new Error('the list is empty');
  }

  if (!currentNode.next) {
    return testList.head; // ?
  }

  while (currentNode.next) {
    next = currentNode.next; // ?
    currentNode.next = last; // ?
    last = currentNode; // ?
    currentNode = next; // ?
  }
  currentNode.next = last; // ?
  return currentNode; // ?
};

console.log(reverseList(testList2));
