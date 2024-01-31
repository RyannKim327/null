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

  // Implement the various AVL tree operations here
}
class AVLTree {
  // ...

  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  updateHeight(node) {
    if (!node) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
}
class AVLTree {
  // ...

  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  rotateLeftRight(node) {
    node.left = this.rotateLeft(node.left);
    return this.rotateRight(node);
  }

  rotateRightLeft(node) {
    node.right = this.rotateRight(node.right);
    return this.rotateLeft(node);
  }
}
class AVLTree {
  // ...

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      return node; // value already exists
    }

    this.updateHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (value < node.left.value) {
        return this.rotateRight(node);
      } else {
        return this.rotateLeftRight(node);
      }
    }

    if (balanceFactor < -1) {
      if (value > node.right.value) {
        return this.rotateLeft(node);
      } else {
        return this.rotateRightLeft(node);
      }
    }

    return node;
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    // Implementation of the deletion operation
  }
}
