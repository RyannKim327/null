class Node {
  constructor(data) {
    this.data = data;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }
}
// Helper function to get the height of a node
function getHeight(node) {
  if (node === null) return 0;
  return node.height;
}

// Helper function to update the height of a node
function updateHeight(node) {
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

// Helper function to perform a right rotation
function rotateRight(node) {
  const newRoot = node.left;
  node.left = newRoot.right;
  newRoot.right = node;
  updateHeight(node);
  updateHeight(newRoot);
  return newRoot;
}

// Helper function to perform a left rotation
function rotateLeft(node) {
  const newRoot = node.right;
  node.right = newRoot.left;
  newRoot.left = node;
  updateHeight(node);
  updateHeight(newRoot);
  return newRoot;
}

// Helper function to get the balance factor of a node
function getBalanceFactor(node) {
  if (node === null) return 0;
  return getHeight(node.left) - getHeight(node.right);
}

// Helper function to balance a node
function balance(node) {
  if (node === null) return null;
  
  if (getBalanceFactor(node) > 1) {
    if (getBalanceFactor(node.left) < 0) {
      node.left = rotateLeft(node.left);
    }
    return rotateRight(node);
  }
  
  if (getBalanceFactor(node) < -1) {
    if (getBalanceFactor(node.right) > 0) {
      node.right = rotateRight(node.right);
    }
    return rotateLeft(node);
  }
  
  updateHeight(node);
  return node;
}

// Helper function to insert a node into the AVL tree
function insertNode(node, data) {
  if (node === null) {
    return new Node(data);
  }
  
  if (data < node.data) {
    node.left = insertNode(node.left, data);
  } else {
    node.right = insertNode(node.right, data)
  }
  
  return balance(node);
}

// Function to insert a value into the AVL tree
AVLTree.prototype.insert = function (data) {
  this.root = insertNode(this.root, data);
};
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
