'use strict';

const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this._storage = new LinkedList();
    this.head = null;
  }

  push(value) {
    this._storage.insertAtHead(value);
  }

  pop() {
    this._storage = this.head.next;
    return this._storage;
  }

  peek() {
    return this._storage.head.value;
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    if (this.head) {
      return false;
    }
    return undefined;
  }
}

module.exports = Stack;
