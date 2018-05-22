'use strict';

import kAryTree from './kAry-tree';

printLevelOrder(kAryTree) {
  if (!this.root) {
    return null;
  }
  return this._breadthFirstSearch(this.root);
}

