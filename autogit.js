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

  // Calculate the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Update the height of a node
  updateHeight(node) {
    if (node === null) {
      return;
    }
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    const newRootRight = newRoot.right;

    newRoot.right = node;
    node.left = newRootRight;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    const newRootLeft = newRoot.left;

    newRoot.left = node;
    node.right = newRootLeft;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }

    this.updateHeight(node);

    // Balance the tree if it becomes unbalanced
    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }
}
const avlTree = new AVLTree();

avlTree.insert(5);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(2);
avlTree.insert(4);
