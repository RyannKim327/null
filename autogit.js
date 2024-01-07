class BTreeNode {
  constructor(order, leaf = true) {
    this.order = order; // Maximum number of keys
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }

  // Insert a key into the tree
  insert(key) {
    if (this.keys.length === 0) {
      // If the node is empty, simply insert the key
      this.keys.push(key);
      return;
    }

    let i = this.keys.length;
    while (i > 0 && key < this.keys[i - 1]) {
      i--;
    }

    if (this.leaf) {
      // If the node is a leaf, insert the key at the correct index
      this.keys.splice(i, 0, key);
    } else {
      // If the node is not a leaf, recursively insert the key in the child node
      if (this.children[i].keys.length === this.order) {
        this.splitChild(i);
        if (key > this.keys[i]) {
          i++;
        }
      }
      this.children[i].insert(key);
    }
  }

  // Split a full child node into two nodes
  splitChild(i) {
    const newChild = new BTreeNode(this.order, this.children[i].leaf);
    const nodeToSplit = this.children[i];

    this.keys.splice(i, 0, nodeToSplit.keys[Math.floor(nodeToSplit.keys.length / 2)]);

    const newKeys = nodeToSplit.keys.splice(Math.ceil(nodeToSplit.keys.length / 2));

    if (!nodeToSplit.leaf) {
      const newChildren = nodeToSplit.children.splice(Math.ceil(nodeToSplit.children.length / 2));
      newChild.children = newChildren;
    }

    newChild.keys = newKeys;
    this.children.splice(i + 1, 0, newChild);
  }

  // Search for a key in the tree
  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }

    if (this.keys[i] === key) {
      return true;
    }

    if (this.leaf) {
      return false;
    }
    return this.children[i].search(key);
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.order = order;
  }

  // Insert a key into the tree
  insert(key) {
    if (this.root.keys.length === this.order) {
      const newRoot = new BTreeNode(this.order, false);
      newRoot.children.push(this.root);
      this.root = newRoot;
      newRoot.splitChild(0);
    }
    this.root.insert(key);
  }

  // Search for a key in the tree
  search(key) {
    return this.root.search(key);
  }
}

// Example usage:
const bTree = new BTree(3);
bTree.insert(3);
bTree.insert(5);
bTree.insert(2);
bTree.insert(4);

console.log(bTree.search(5)); // Output: true
console.log(bTree.search(6)); // Output: false
