'use strict';

import KAryTree from './kAry-tree';

findMatches(KAryTree, value) {
  if (!rootNode) {
    throw new Error('no tree to search');
  }

  let currentNode = null;

  let collection = [];

  while (this.root) {
    console.log(`Visiting ${currentNode.value}`);
    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.value === value) {
        collection.push(currentNode.children[i]);
      }
    }
    return collection;
  }
}
