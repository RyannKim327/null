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

  // Insert a value into the tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  // Internal method to recursively insert a node
  _insertNode(node, value) {
    if (!node) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    const balanceFactor = this._getBalanceFactor(node);

    // Perform rotations if the node is unbalanced
    if (balanceFactor > 1) {
      if (value < node.left.value) {
        return this._rotateRight(node);
      } else {
        node.left = this._rotateLeft(node.left);
        return this._rotateRight(node);
      }
    }

    if (balanceFactor < -1) {
      if (value > node.right.value) {
        return this._rotateLeft(node);
      } else {
        node.right = this._rotateRight(node.right);
        return this._rotateLeft(node);
      }
    }

    return node;
  }

  // Delete a value from the tree
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  // Internal method to recursively delete a node
  _deleteNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left || !node.right) {
        return node.left || node.right;
      }

      const minValue = this._findMinValue(node.right);
      node.value = minValue;
      node.right = this._deleteNode(node.right, minValue);
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    const balanceFactor = this._getBalanceFactor(node);

    // Perform rotations if the node is unbalanced
    if (balanceFactor > 1) {
      if (this._getBalanceFactor(node.left) >= 0) {
        return this._rotateRight(node);
      } else {
        node.left = this._rotateLeft(node.left);
        return this._rotateRight(node);
      }
    }

    if (balanceFactor < -1) {
      if (this._getBalanceFactor(node.right) <= 0) {
        return this._rotateLeft(node);
      } else {
        node.right = this._rotateRight(node.right);
        return this._rotateLeft(node);
      }
    }

    return node;
  }

  // Find the minimum value in a subtree
  _findMinValue(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  // Search for a value in the tree
  search(value) {
    return this._searchNode(this.root, value);
  }

  // Internal method to recursively search for a value
  _searchNode(node, value) {
    if (!node) {
      return false;
    }
    if (value === node.value) {
      return true;
    }
    if (value < node.value) {
      return this._searchNode(node.left, value);
    }
    return this._searchNode(node.right, value);
  }

  // Get the height of a node
  _getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the balance factor of a node
  _getBalanceFactor(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }

  // Rotate a node to the left
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Rotate a node to the right
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }
}
const avlTree = new AVLTree();

avlTree.insert(5);
avlTree.insert(3);
avlTree.insert(6);

console.log(avlTree.search(3));  // Output: true

avlTree.delete(3);

console.log(avlTree.search(3));  // Output: false
