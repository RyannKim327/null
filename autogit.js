class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t; // Minimum degree (defines the number of keys the node can hold)
    this.keys = []; // Array to hold the keys
    this.children = []; // Array to hold the child nodes
    this.leaf = leaf; // Is true when node is a leaf node, otherwise false
  }
}

class BTree {
  constructor(t) {
    this.root = null; // Root node
    this.t = t; // Minimum degree (defines the number of keys the nodes can hold)
  }

  // Insert a key into the tree
  insert(key) {
    if (this.root === null) {
      // Tree is empty, create a new root node
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === (2 * this.t) - 1) {
        // Root node is full, grow the tree taller
        const newRoot = new BTreeNode(this.t, false);
        newRoot.children.push(this.root);
        this.splitChild(newRoot, 0, this.root);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

  // Insert a key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      // Shift the keys greater than the new key to the right
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i -= 1;
      }
      node.keys[i + 1] = key;
    } else {
      // Find the child node to insert the key
      while (i >= 0 && key < node.keys[i]) {
        i -= 1;
      }
      i += 1;
      if (node.children[i].keys.length === (2 * this.t) - 1) {
        // Child node is full, split it
        this.splitChild(node, i, node.children[i]);
        if (key > node.keys[i]) {
          i += 1;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // Split a full child node into two nodes
  splitChild(parent, index, child) {
    const newNode = new BTreeNode(this.t, child.leaf);
    parent.keys.splice(index, 0, child.keys[this.t - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = child.keys.splice(this.t, this.t - 1);
    if (!child.leaf) {
      newNode.children = child.children.splice(this.t, this.t);
    }
  }

  // Search for a key in the tree
  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i += 1;
    }
    if (node.keys[i] === key) {
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.search(key, node.children[i]);
    }
  }
}
const bTree = new BTree(3); // Create a B-tree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
console.log(bTree.search(10)); // Output: true
console.log(bTree.search(30)); // Output: false
