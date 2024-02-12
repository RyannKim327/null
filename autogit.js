class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }
}
AVLTree.prototype.height = function(node) {
  if (node === null) {
    return 0;
  }
  return node.height;
};
AVLTree.prototype.balanceFactor = function(node) {
  return this.height(node.left) - this.height(node.right);
};
AVLTree.prototype.rotateRight = function(node) {
  const newRoot = node.left;
  node.left = newRoot.right;
  newRoot.right = node;

  node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  newRoot.height = Math.max(this.height(newRoot.left), node.height) + 1;

  return newRoot;
};

AVLTree.prototype.rotateLeft = function(node) {
  const newRoot = node.right;
  node.right = newRoot.left;
  newRoot.left = node;

  node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  newRoot.height = Math.max(this.height(newRoot.right), node.height) + 1;

  return newRoot;
};
AVLTree.prototype.insert = function(value) {
  this.root = this.insertNode(this.root, value);
};

AVLTree.prototype.insertNode = function(root, value) {
  if (root === null) {
    return new Node(value);
  }

  if (value < root.value) {
    root.left = this.insertNode(root.left, value);
  } else {
    root.right = this.insertNode(root.right, value);
  }

  root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
  const balanceFactor = this.balanceFactor(root);

  // Left-left case
  if (balanceFactor > 1 && value < root.left.value) {
    return this.rotateRight(root);
  }

  // Right-right case
  if (balanceFactor < -1 && value > root.right.value) {
    return this.rotateLeft(root);
  }

  // Left-right case
  if (balanceFactor > 1 && value > root.left.value) {
    root.left = this.rotateLeft(root.left);
    return this.rotateRight(root);
  }

  // Right-left case
  if (balanceFactor < -1 && value < root.right.value) {
    root.right = this.rotateRight(root.right);
    return this.rotateLeft(root);
  }

  return root;
};
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
// ... continue inserting more values
