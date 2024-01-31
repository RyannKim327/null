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
function height(node) {
  if (node === null) return 0;
  return node.height;
}
function getBalance(node) {
  if (node === null) return 0;
  return height(node.left) - height(node.right);
}
function rightRotate(y) {
  const x = y.left; // Set x as y's left child
  const T2 = x.right; // Set T2 as x's right subtree

  // Perform rotation
  x.right = y;
  y.left = T2;

  // Update heights
  y.height = Math.max(height(y.left), height(y.right)) + 1;
  x.height = Math.max(height(x.left), height(x.right)) + 1;

  return x; // Return the new root
}
function leftRotate(x) {
  const y = x.right; // Set y as x's right child
  const T2 = y.left; // Set T2 as y's left subtree

  // Perform rotation
  y.left = x;
  x.right = T2;

  // Update heights
  x.height = Math.max(height(x.left), height(x.right)) + 1;
  y.height = Math.max(height(y.left), height(y.right)) + 1;

  return y; // Return the new root
}
AVLTree.prototype.insert = function (value) {
  this.root = this._insert(this.root, value);
};

AVLTree.prototype._insert = function (node, value) {
  // Standard BST insertion
  if (node === null) return new Node(value);

  if (value < node.value) {
    node.left = this._insert(node.left, value);
  } else if (value > node.value) {
    node.right = this._insert(node.right, value);
  } else {
    return node; // Duplicate values are not allowed
  }

  // Update the height of the ancestor node
  node.height = 1 + Math.max(height(node.left), height(node.right));

  // Check if the node is unbalanced
  const balance = getBalance(node);

  // Left Left case
  if (balance > 1 && value < node.left.value) {
    return rightRotate(node);
  }

  // Right Right case
  if (balance < -1 && value > node.right.value) {
    return leftRotate(node);
  }

  // Left Right case
  if (balance > 1 && value > node.left.value) {
    node.left = leftRotate(node.left);
    return rightRotate(node);
  }

  // Right Left case
  if (balance < -1 && value < node.right.value) {
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
};
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree.root.value); // Output: 20
console.log(avlTree.root.left.value); // Output: 10
console.log(avlTree.root.right.value); // Output: 30
