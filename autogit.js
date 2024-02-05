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
function getHeight(node) {
  if (node === null) return 0;
  return node.height;
}

function getBalanceFactor(node) {
  if (node === null) return 0;
  return getHeight(node.left) - getHeight(node.right);
}
function rotateLeft(node) {
  const rightNode = node.right;
  node.right = rightNode.left;
  rightNode.left = node;

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  rightNode.height = Math.max(getHeight(rightNode.left), getHeight(rightNode.right)) + 1;

  return rightNode;
}
function rotateRight(node) {
  const leftNode = node.left;
  node.left = leftNode.right;
  leftNode.right = node;

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  leftNode.height = Math.max(getHeight(leftNode.left), getHeight(leftNode.right)) + 1;

  return leftNode;
}
AVLTree.prototype.insert = function (value) {
  const newNode = new Node(value);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.root = this._insertNode(this.root, newNode);
  }
};

AVLTree.prototype._insertNode = function (node, newNode) {
  if (node === null) return newNode;

  if (newNode.value < node.value) {
    node.left = this._insertNode(node.left, newNode);
  } else {
    node.right = this._insertNode(node.right, newNode);
  }

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  const balanceFactor = getBalanceFactor(node);

  if (balanceFactor > 1 && newNode.value < node.left.value) {
    return rotateRight(node);
  }

  if (balanceFactor < -1 && newNode.value > node.right.value) {
    return rotateLeft(node);
  }

  if (balanceFactor > 1 && newNode.value > node.left.value) {
    node.left = rotateLeft(node.left);
    return rotateRight(node);
  }

  if (balanceFactor < -1 && newNode.value < node.right.value) {
    node.right = rotateRight(node.right);
    return rotateLeft(node);
  }

  return node;
};
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
