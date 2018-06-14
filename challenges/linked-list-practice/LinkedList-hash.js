const LinkedList = function () {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    const node = Node(value);
    if (!list.head ) {
      list.head = node;
    } else {
      list.tail.next = node;
    }

    list.tail = node;

  };

  list.removeHead = function () {
    let result;
    if (list.head ) {
      result = list.head;
      if (list.head.next) {
        list.head = list.head.next;
      } else {
        list.head = null;
        list.tail = null;
      }
    }
    return result.value;
  };

  list.contains = function (target) {
    let referenceNode = list.head;

    while (referenceNode) {
      if (referenceNode.value === target) {
        return true;
      }
      referenceNode = referenceNode.next;
    }
    return false;
  };

  return list;
};

const Node = function (value) {
  let node = {};

  node.value = value;
  node.next = null;

  return node;
};

console.log(LinkedList())
