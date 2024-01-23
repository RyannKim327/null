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

  _insertNode(root, value) {
    if (!root) {
      return new Node(value);
    }

    if (value < root.value) {
      root.left = this._insertNode(root.left, value);
    } else {
      root.right = this._insertNode(root.right, value);
    }

    root.height = Math.max(this._getHeight(root.left), this._getHeight(root.right)) + 1;

    const balanceFactor = this._getBalanceFactor(root);

    if (balanceFactor > 1) {
      // left rotation
      if (value < root.left.value) {
        return this._rotateRight(root);
      }
      // left-right rotation
      else {
        root.left = this._rotateLeft(root.left);
        return this._rotateRight(root);
      }
    }

    if (balanceFactor < -1) {
      // right rotation
      if (value > root.right.value) {
        return this._rotateLeft(root);
      }
      // right-left rotation
      else {
        root.right = this._rotateRight(root.right);
        return this._rotateLeft(root);
      }
    }

    return root;
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(root, value) {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      root.left = this._deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        root = null;
      } else if (!root.left) {
        root = root.right;
      } else if (!root.right) {
        root = root.left;
      } else {
        const minRight = this._getMinNode(root.right);
        root.value = minRight.value;
        root.right = this._deleteNode(root.right, minRight.value);
      }
    }

    if (!root) {
      return null;
    }

    root.height = Math.max(this._getHeight(root.left), this._getHeight(root.right)) + 1;

    const balanceFactor = this._getBalanceFactor(root);

    if (balanceFactor > 1) {
      if (this._getBalanceFactor(root.left) >= 0) {
        return this._rotateRight(root);
      }
      root.left = this._rotateLeft(root.left);
      return this._rotateRight(root);
    }

    if (balanceFactor < -1) {
      if (this._getBalanceFactor(root.right) <= 0) {
        return this._rotateLeft(root);
      }
      root.right = this._rotateRight(root.right);
      return this._rotateLeft(root);
    }

    return root;
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(root, value) {
    if (!root) {
      return false;
    }

    if (value < root.value) {
      return this._searchNode(root.left, value);
    } else if (value > root.value) {
      return this._searchNode(root.right, value);
    } else {
      return true;
    }
  }

  getMin() {
    const minNode = this._getMinNode(this.root);
    return minNode ? minNode.value : null;
  }

  _getMinNode(node) {
    if (!node || !node.left) {
      return node;
    }

    return this._getMinNode(node.left);
  }

  getMax() {
    const maxNode = this._getMaxNode(this.root);
    return maxNode ? maxNode.value : null;
  }

  _getMaxNode(node) {
    if (!node || !node.right) {
      return node;
    }

    return this._getMaxNode(node.right);
  }

  inOrderTraversal() {
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(node) {
    if (node) {
      this._inOrderTraversal(node.left);
      console.log(node.value);
      this._inOrderTraversal(node.right);
    }
  }

  _getHeight(node) {
    return node ? node.height : 0;
  }

  _getBalanceFactor(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }

  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = Math.max(this._getHeight(z.left), this._getHeight(z.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }

  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = Math.max(this._getHeight(z.left), this._getHeight(z.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }
}

// Example usage:

const avlTree = new AVLTree();

avlTree.insert(5);
avlTree.insert(10);
avlTree.insert(15);
avlTree.insert(20);
avlTree.insert(25);

console.log(avlTree.getMin()); // Output: 5
console.log(avlTree.getMax()); // Output: 25

avlTree.inOrderTraversal(); // Output: 5 10 15 20 25

avlTree.delete(15);

avlTree.inOrderTraversal(); // Output: 5 10 20 25
