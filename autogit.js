class BNode {
  constructor(t, leaf) {
    this.t = t; // Minimum degree
    this.keys = []; // Array to hold keys
    this.children = []; // Array to hold child pointers
    this.leaf = leaf || true; // True if node is a leaf, false otherwise
  }
}
class BTree {
  constructor(t) {
    this.root = null; // Pointer to the root node
    this.t = t; // Minimum degree
  }
}
BTree.prototype.insert = function(key) {
  // If tree is empty, create a new root node
  if (this.root === null) {
    this.root = new BNode(this.t, true);
    this.root.keys.push(key);
  } else {
    // If the root is full, grow the tree taller
    if (this.root.keys.length === 2 * this.t - 1) {
      const newRoot = new BNode(this.t, false);
      newRoot.children.push(this.root);
      this.splitChild(newRoot, 0, this.root);
      this.root = newRoot;
    }
    this.insertNonFull(this.root, key);
  }
};
BTree.prototype.insertNonFull = function(node, key) {
  let i = node.keys.length - 1;
  if (node.leaf) {
    // Find the right position to insert the new key
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Find the child node to insert the new key
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i++;
    if (node.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(node, i, node.children[i]);
      if (key > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key);
  }
};
BTree.prototype.splitChild = function(parent, index, child) {
  const newNode = new BNode(this.t, child.leaf);
  parent.keys.splice(index, 0, child.keys[this.t - 1]);
  parent.children.splice(index + 1, 0, newNode);
  newNode.keys = child.keys.splice(this.t, this.t - 1);
  if (!child.leaf) {
    newNode.children = child.children.splice(this.t, this.t);
  }
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
    return node;
  }
  if (node.leaf) {
    return null;
  }
  return this.searchNode(node.children[i], key);
};
const bTree = new BTree(3); // Create a BTree with minimum degree 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(15);
console.log(bTree.search(15)); // Output: BNode instance containing the key 15
