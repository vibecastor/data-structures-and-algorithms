'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const Queue = class Queue {
  constructor() {
    this.node = new Node();
    this.queue = [];

    enqueue(node)
    {
      this.queue.push(node);
    }

    dequeue() {
      let firstElement = 0;
      for (let i = 0; i < this.stack1.length; i++) {
        this.stack2.push(this.stack1.pop());
      }
      firstElement = this.stack2.pop();

      for (let i = 0; i < this.stack2.length; i++) {
        this.stack1.push(this.stack2.pop());
      }
      return firstElement;
    }

    isEmpty();
    {
      if (!this.node) {
        return true;
      }
      if (this.node) {
        return false;
      }
      return undefined;
    }

    breadthFirstTraversal(tree)
    {
      while (!queue.isEmpty()) {
        const currentNode = enqueue();

        console.log(`Visiting a node with value ${node.value}`);
        enqueue(node.left);
        enqueue(node.right);
      }
    }
  }
};
