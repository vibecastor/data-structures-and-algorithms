'use strict';

// Iterative levelOrderSearch...

const levelOrderSearch = (rootNode) => {
  // check if a rootNode exists...
  if (!rootNode) {
    throw new Error('The tree is empty!');
  }

  // creating a queue to push our nodes into...
  const queue = [];
  queue.push(rootNode);

  // iterate through queue as long as it contains nodes...
  while (queue.length > 0) {
    // creating a reference to currentNode at top of the queue
    const currentNode = queue[0];

    // if currentNode has a left child, add it to the queue...
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    // if currentNode has a right child, add it to the queue...
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }

    // De-queue currentNode from the queue, we are done with it!
    queue.shift();
  }
  //  loop will run until the queue is empty
};

// Algorithm
// 1 - visit each node in the tree starting with the rootNode.
// 2 - en-queue the rootNode
// 3 - en-queue the left child if exists
// 4 - en-queue the right child if exists
// 5 - de-queue the rootNode
// 6 - continue this process until the last node has been de-queue'd

// Time/Space Complexity
// Time = O(n) where n is the number of nodes in the tree (we have to visit every node)
// Space = O(n) where n if the number of nodes in the call stack
// OR
// Space = O(h) where h is the height of the tree since
