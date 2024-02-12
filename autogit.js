class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    if (node === null) {
      return -1;
    }
    return node.height;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }

    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (value < node.left.value) {
        return this.rotateRight(node);
      } else if (value > node.left.value) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
    } else if (balanceFactor < -1) {
      if (value > node.right.value) {
        return this.rotateLeft(node);
      } else if (value < node.right.value) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
    }

    return node;
  }

  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = Math.max(this.height(z.left), this.height(z.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    return y;
  }

  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = Math.max(this.height(z.left), this.height(z.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    return y;
  }

  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.height(node.left) - this.height(node.right);
  }

  // Other functions: delete, search, traversal, etc.
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
