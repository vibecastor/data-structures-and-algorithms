'use strict';

import Queue from '../queue-with-stacks';

describe('Queue', () => {
  test('#constructor', () => {
    const testQueue = new Queue();
    expect(testQueue.length).toEqual(0);
  });
});
