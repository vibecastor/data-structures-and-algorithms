'use strict';

const Queue = class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
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
};

export default Queue;
