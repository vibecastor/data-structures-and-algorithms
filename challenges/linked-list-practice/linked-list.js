class LinkedList {
  constructor(...values) {
    this.head = null;
    this.length = 0;
    this.addToHead(...values);
  }

  _addSingleItemToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  addToHead(...values) {
    values.forEach(value => this._addSingleItemToHead(value));
    return this;
  }

  removeFromHead() {
    if (this.length === 0) {
      throw new Error('the list is already empty!');
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  find(val) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === val) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(val) {
    if (this.length === 0) {
      throw new Error('this list is already empty!');
    }

    if (this.head.value === val) {
      this.removeFromHead();
      return this;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;

    while (currentNode) {
      if (currentNode.value === val) {
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return undefined;
    }

    previousNode.next = currentNode.next;
    this.length--;
    return this;
  }
}

// console.log(new LinkedList('hello!'));

const list = new LinkedList()
console.log(list)
list._addSingleItemToHead(1) // ?
list._addSingleItemToHead(2) // ?
console.log(list)
list.addToHead(3, 4, 5, 6, 7); // ?
console.log(list)
list.remove(6);  // ?
// . _addSingleItemToHead('')
  // . _addSingleItemToHead('third')
  // .addToHead(5, 4, 3, 2, 1)

// console.log(list);
// console.log(list.removeFromHead());
// console.log(list);
// console.log(list.find(2));
// console.log(list.remove());
