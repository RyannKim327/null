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

  // Implement tree operations here
}
class AVLTree {
  // ...

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    if (node === null)
      return new Node(value);

    if (value < node.value)
      node.left = this._insertNode(node.left, value);
    else
      node.right = this._insertNode(node.right, value);

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    const balanceFactor = this._getBalanceFactor(node);

    if (balanceFactor > 1 && value < node.left.value) {
      return this._rotateRight(node);
    }
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }
    if (balanceFactor < -1 && value > node.right.value) {
      return this._rotateLeft(node);
    }
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }
    return node;
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (node === null)
      return null;

    if (value < node.value)
      node.left = this._deleteNode(node.left, value);
    else if (value > node.value)
      node.right = this._deleteNode(node.right, value);
    else {
      if (node.left === null && node.right === null)
        return null;
      else if (node.left === null)
        node = node.right;
      else if (node.right === null)
        node = node.left;
      else {
        const minNode = this._findMinNode(node.right);
        node.value = minNode.value;
        node.right = this._deleteNode(node.right, minNode.value);
      }
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    const balanceFactor = this._getBalanceFactor(node);

    if (balanceFactor > 1 && this._getBalanceFactor(node.left) >= 0) {
      return this._rotateRight(node);
    }
    if (balanceFactor > 1 && this._getBalanceFactor(node.left) < 0) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }
    if (balanceFactor < -1 && this._getBalanceFactor(node.right) <= 0) {
      return this._rotateLeft(node);
    }
    if (balanceFactor < -1 && this._getBalanceFactor(node.right) > 0) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null)
      return false;

    if (value < node.value)
      return this._searchNode(node.left, value);
    else if (value > node.value)
      return this._searchNode(node.right, value);
    else
      return true;
  }

  // Helper methods

  _getHeight(node) {
    if (node === null)
      return 0;
    return node.height;
  }

  _getBalanceFactor(node) {
    if (node === null)
      return 0;
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  _findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this._findMinNode(node.left);
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree.search(20)); // Output: true
avlTree.delete(20);
console.log(avlTree.search(20)); // Output: false
