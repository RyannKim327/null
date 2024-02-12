// Node class
class Node {
  constructor(order, leaf) {
    this.order = order;  // Maximum number of keys
    this.keys = [];      // Array of keys
    this.children = [];  // Array of child nodes
    this.leaf = leaf;    // Is the node a leaf
  }
}

// B-tree class
class BTree {
  constructor(order) {
    this.root = null;   // Root node
    this.order = order; // Maximum number of keys in a node
  }

  // Insert a key into the B-tree
  insert(key) {
    if (this.root === null) {
      // If the tree is empty, create a new root node
      this.root = new Node(this.order, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === this.order) {
        // If the root is full, split it and create a new root
        const newRoot = new Node(this.order, false);
        newRoot.children.push(this.root);
        this.splitChild(newRoot, 0, this.root);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

  // Split the child node
  splitChild(parent, index, child) {
    const newNode = new Node(this.order, child.leaf);
    parent.keys.splice(index, 0, child.keys[this.order - 1]);
    parent.children.splice(index + 1, 0, newNode);
    newNode.keys = child.keys.splice(this.order, this.order - 1);

    if (!child.leaf) {
      newNode.children = child.children.splice(this.order, this.order);
    }
  }

  // Insert a key into a non-full node
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.children[i].keys.length === this.order) {
        this.splitChild(node, i, node.children[i]);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // Search for a key in the B-tree
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true;
    }
    if (node.leaf) {
      return false;
    }
    return this.searchNode(node.children[i], key);
  }
}

// Example usage:
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);

console.log(bTree.search(6));   // Output: true
console.log(bTree.search(15));  // Output: false
