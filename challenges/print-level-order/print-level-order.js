'use strict';

import kAryTree from './kAry-tree';

let queue1 = [];
let queueu2 = [];

printLevelOrder(kAryTree) {
  if (!this.root) {
    return null;
  }
  return this._breadthFirstSearch(this.root);
}

