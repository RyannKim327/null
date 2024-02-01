class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // Minimum degree
    this.keys = []; // Array of keys stored in the node
    this.children = []; // Array of child pointers
    this.leaf = leaf; // Is true if the node is a leaf, false otherwise
  }
}
class BTree {
  constructor(t) {
    this.root = null; // Root node of the B-tree
    this.t = t; // Minimum degree
  }
}
BTree.prototype.insert = function(key) {
  if (!this.root) {
    // Tree is empty, create the root node
    this.root = new BTreeNode(this.t, true);
    this.root.keys.push(key);
  } else {
    if (this.root.keys.length === (2 * this.t - 1)) {
      // Root is full, split it
      const newRoot = new BTreeNode(this.t, false);
      newRoot.children.push(this.root);
      this.splitChild(newRoot, 0, this.root);
  
      // Insert the key into the appropriate child
      this.insertNonFull(newRoot, key);
  
      // Update the root
      this.root = newRoot;
    } else {
      // Root is not full, insert the key in the appropriate child
      this.insertNonFull(this.root, key);
    }
  }
};

BTree.prototype.insertNonFull = function(node, key) {
  let i = node.keys.length - 1;
  
  if (node.leaf) {
    // Node is a leaf, insert the key at the right position
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Node is not a leaf, find the appropriate child to insert the key
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i++;
    if (node.children[i].keys.length === (2 * this.t - 1)) {
      // Child is full, split it
      this.splitChild(node, i, node.children[i]);
      if (key > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key);
  }
};

BTree.prototype.splitChild = function(parent, index, child) {
  const newNode = new BTreeNode(this.t, child.leaf);
  
  // Move keys from the child to the new node
  newNode.keys = child.keys.splice(this.t, child.keys.length - 1);
  
  // Move children from the child to the new node
  if (!child.leaf) {
    newNode.children = child.children.splice(this.t, child.children.length);
  }
  
  // Insert the new node into the parent
  parent.keys.splice(index, 0, child.keys.pop());
  parent.children.splice(index + 1, 0, newNode);
};
BTree.prototype.search = function(key) {
  return this.searchNode(this.root, key);
};

BTree.prototype.searchNode = function(node, key) {
  let i = 0;
  while (i < node.keys.length && key > node.keys[i]) {
    i++;
  }
  
  if (node.keys[i] === key) {
    return true;
  } else if (node.leaf) {
    // Key is not found
    return false;
  } else {
    // Continue searching in the appropriate child
    return this.searchNode(node.children[i], key);
  }
};
const bTree = new BTree(3); // Create a B-tree with minimum degree of 3
bTree.insert(5);
bTree.insert(10);
bTree.insert(15);

console.log(bTree.search(10)); // Output: true
console.log(bTree.search(20)); // Output: false
