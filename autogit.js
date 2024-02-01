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

  // ...

}
function getHeight(node) {
  if (node === null) return 0;
  return node.height;
}
function getBalanceFactor(node) {
  if (node === null) return 0;
  return getHeight(node.left) - getHeight(node.right);
}
function rotateRight(node) {
  const leftNode = node.left;
  const rightChildOfLeftNode = leftNode.right;

  // Perform rotation
  leftNode.right = node;
  node.left = rightChildOfLeftNode;

  // Update heights
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  leftNode.height = Math.max(getHeight(leftNode.left), getHeight(leftNode.right)) + 1;

  return leftNode;
}
function rotateLeft(node) {
  const rightNode = node.right;
  const leftChildOfRightNode = rightNode.left;

  // Perform rotation
  rightNode.left = node;
  node.right = leftChildOfRightNode;

  // Update heights
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  rightNode.height = Math.max(getHeight(rightNode.left), getHeight(rightNode.right)) + 1;

  return rightNode;
}
function insert(node, value) {
  // Perform a normal BST insertion
  if (node === null) {
    return new Node(value);
  }

  if (value < node.value) {
    node.left = insert(node.left, value);
  } else if (value > node.value) {
    node.right = insert(node.right, value);
  } else {
    // Duplicate values are not allowed in AVL tree
    return node;
  }

  // Update height of this ancestor node
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;

  // Check the balance factor and balance the tree if needed
  const balanceFactor = getBalanceFactor(node);

  // Left Left Case
  if (balanceFactor > 1 && value < node.left.value) {
    return rotateRight(node);
  }

  // Right Right Case
  if (balanceFactor < -1 && value > node.right.value) {
    return rotateLeft(node);
  }

  // Left Right Case
  if (balanceFactor > 1 && value > node.left.value) {
    node.left = rotateLeft(node.left);
    return rotateRight(node);
  }

  // Right Left Case
  if (balanceFactor < -1 && value < node.right.value) {
    node.right = rotateRight(node.right);
    return rotateLeft(node);
  }

  return node;
}
AVLTree.prototype.insert = function (value) {
  this.root = insert(this.root, value);
};
