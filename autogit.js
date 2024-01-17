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

  // Method to get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Method to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Method to update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Method to perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  // Method to perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  // Method to balance the tree after insertion
  balance(node) {
    this.updateHeight(node);

    // Perform rotations if the node becomes unbalanced
    if (this.getBalanceFactor(node) > 1) { // Left heavy
      if (this.getBalanceFactor(node.left) < 0) { // Left-Right case
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node); // Left-Left or Left-Right case
    }

    if (this.getBalanceFactor(node) < -1) { // Right heavy
      if (this.getBalanceFactor(node.right) > 0) { // Right-Left case
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node); // Right-Right or Right-Left case
    }

    return node; // Balanced node
  }

  // Method to insert a new node into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    // Perform standard BST insertion
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }

    // Update the height and balance the node
    return this.balance(node);
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
