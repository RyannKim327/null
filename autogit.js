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

  // Get the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (node === null) {
      return;
    }
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Perform left rotation on a node
  leftRotate(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Perform right rotation on a node
  rightRotate(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Balance the tree at a specific node
  balance(node) {
    this.updateHeight(node);

    if (this.getBalanceFactor(node) > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.leftRotate(node.left);
      }
      return this.rightRotate(node);
    }

    if (this.getBalanceFactor(node) < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rightRotate(node.right);
      }
      return this.leftRotate(node);
    }

    return node;
  }

  // Insert a value into the tree
  insert(value) {
    this.root = this._insertRecursive(this.root, value);
  }

  _insertRecursive(node, value) {
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insertRecursive(node.left, value);
    } else {
      node.right = this._insertRecursive(node.right, value);
    }

    return this.balance(node);
  }

  // Print the tree in-order
  printInOrder() {
    this._printInOrderRecursive(this.root);
    console.log();
  }

  _printInOrderRecursive(node) {
    if (node === null) {
      return;
    }

    this._printInOrderRecursive(node.left);
    process.stdout.write(node.value + " ");
    this._printInOrderRecursive(node.right);
  }
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(3);
avlTree.insert(8);
avlTree.insert(12);
avlTree.insert(17);

avlTree.printInOrder(); // Output: 3 5 8 10 12 15 17
