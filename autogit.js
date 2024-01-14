class BTreeNode {
  constructor(t, leaf) {
    this.t = t;
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }

  // Implement your methods for searching, inserting, splitting nodes, etc.
}

class BTree {
  constructor(t) {
    this.t = t;
    this.root = new BTreeNode(t, true);
  }

  // Implement your methods for searching and inserting in B-tree
}

// Usage
const bTree = new BTree(3);
bTree.insert(5);
bTree.insert(10);
const found = bTree.search(5);
console.log(found); // true if found, false otherwise
