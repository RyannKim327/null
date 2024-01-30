class AVLNode {
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

  // Helper function to insert a node recursively
  _insertNode(node, value) {
    // Perform a standard BST insertion
    if (!node) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }

    // Update the height of the ancestor node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    // Perform balancing if necessary
    return this._balanceNode(node);
  }

  // Perform AVL tree rotations to balance the node
  _balanceNode(node) {
    // Check if the node is balanced or unbalanced
    const balanceFactor = this._getBalanceFactor(node);

    // Left-left case
    if (balanceFactor > 1 && value < node.left.value) {
      return this._rotateRight(node);
    }

    // Right-right case
    if (balanceFactor < -1 && value > node.right.value) {
      return this._rotateLeft(node);
    }

    // Left-right case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    // Right-left case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Perform a right rotation
  _rotateRight(node) {
    const newRoot = node.left;
    const tempNode = newRoot.right;

    // Perform the rotation
    newRoot.right = node;
    node.left = tempNode;

    // Update heights
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));

    return newRoot;
  }

  // Perform a left rotation
  _rotateLeft(node) {
    const newRoot = node.right;
    const tempNode = newRoot.left;

    // Perform the rotation
    newRoot.left = node;
    node.right = tempNode;

    // Update heights
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));

    return newRoot;
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
}
