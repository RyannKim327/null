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

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  // Internal method to insert a value recursively
  _insertNode(node, value) {
    // Step 1: Perform a standard BST insert
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }

    // Step 2: Update height of the ancestor node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    // Step 3: Perform balancing if necessary
    const balanceFactor = this._getBalanceFactor(node);

    // Left Left case
    if (balanceFactor > 1 && value < node.left.value) {
      return this._rotateRight(node);
    }

    // Right Right case
    if (balanceFactor < -1 && value > node.right.value) {
      return this._rotateLeft(node);
    }

    // Left Right case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    // Right Left case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Get the height of a node
  _getHeight(node) {
    if (!node) {
      return 0;
    }
    return node.height;
  }

  // Get the balance factor of a node
  _getBalanceFactor(node) {
    if (!node) {
      return 0;
    }
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  // Perform a right rotation
  _rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    // Perform rotation
    newRoot.right = node;
    node.left = temp;

    // Update heights
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));

    return newRoot;
  }

  // Perform a left rotation
  _rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    // Perform rotation
    newRoot.left = node;
    node.right = temp;

    // Update heights
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));

    return newRoot;
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log(avlTree);
