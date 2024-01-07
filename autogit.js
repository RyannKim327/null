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

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  _getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  _updateHeight(node) {
    if (node === null) {
      return;
    }
    node.height = Math.max(
      this._getHeight(node.left),
      this._getHeight(node.right)
    ) + 1;
  }

  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    this._updateHeight(z);
    this._updateHeight(y);

    return y;
  }

  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    this._updateHeight(z);
    this._updateHeight(y);

    return y;
  }

  _insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      return node; // Duplicate values are not allowed
    }

    this._updateHeight(node);

    const balanceFactor = this._getBalanceFactor(node);

    if (balanceFactor > 1 && value < node.left.value) {
      // Left Left Case
      return this._rotateRight(node);
    }

    if (balanceFactor < -1 && value > node.right.value) {
      // Right Right Case
      return this._rotateLeft(node);
    }

    if (balanceFactor > 1 && value > node.left.value) {
      // Left Right Case
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    if (balanceFactor < -1 && value < node.right.value) {
      // Right Left Case
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // You can implement other methods like deletion, searching, etc. here
}

// Usage:

// Create an instance of AVLTree
const tree = new AVLTree();

// Insert values into the tree
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
