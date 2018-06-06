'use strict';

import Queue from '../queue-with-stacks';

describe.skip('Queue', () => {
  test('#enqueue', () => {
    const testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.length).toEqual(2);
  });
});

describe.skip('dequeue', () => {
  test('#dequeue', () => {
    const testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.dequeue();
    expect(testQueue.length).toEqual(0);
  });
});
