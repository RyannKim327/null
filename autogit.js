class BTreeNode {
  constructor(order) {
    this.order = order; // Maximum number of children
    this.keys = [];     // An array to store keys
    this.children = []; // An array to store child nodes
    this.isLeaf = true; // Flag to check if node is a leaf
  }
}
class BTree {
  constructor(order) {
    this.root = null; // Root node of the tree
    this.order = order; // Maximum number of children
  }
}
BTree.prototype.insert = function (key) {
  if (this.root === null) {
    // Tree is empty, create root node
    this.root = new BTreeNode(this.order);
    this.root.keys.push(key);
  } else {
    // Tree is not empty, insert key recursively starting at root
    if (this.root.keys.length >= this.order) {
      // Root is full, split the root
      const newRoot = new BTreeNode(this.order);
      newRoot.children.push(this.root);
      this.root = newRoot;
      this.splitChild(this.root, 0);
    }
    this.insertNonFull(this.root, key);
  }
}
BTree.prototype.insertNonFull = function (node, key) {
  let i = node.keys.length - 1;
  if (node.isLeaf) {
    // Insert key into leaf node
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Insert key into non-leaf node
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i = i + 1;
    if (node.children[i].keys.length >= this.order) {
      // Child is full, split the child
      this.splitChild(node, i);
      if (key > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key);
  }
}
BTree.prototype.splitChild = function (parent, index) {
  const child = parent.children[index];
  const splitIndex = Math.floor(this.order / 2);
  const newChild = new BTreeNode(this.order);
  newChild.keys = child.keys.splice(splitIndex + 1);
  if (!child.isLeaf) {
    newChild.isLeaf = false;
    newChild.children = child.children.splice(splitIndex + 1);
  }
  parent.keys.splice(index, 0, child.keys[splitIndex]);
  parent.children.splice(index + 1, 0, newChild);
  child.keys.pop(); // Remove the split key from the original child
}
const bTree = new BTree(3); // Create a B-tree with order 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
// ...
