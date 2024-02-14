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

  // Helper function to get the height of a node
  getNodeHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to update the height of a node
  updateNodeHeight(node) {
    node.height = 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
  }

  // Helper function to perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    // Update heights
    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Helper function to perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    // Update heights
    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // Main function to insert a node into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    // Update the height of the current node
    this.updateNodeHeight(node);

    // Balance the tree if needed
    return this.balance(node);
  }

  // Helper function to balance the AVL tree
  balance(node) {
    const balanceFactor = this.getBalanceFactor(node);

    // Left Left case (perform a right rotation)
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right Right case (perform a left rotation)
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left Right case (perform a left rotation on left child, then right rotation on current node)
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left case (perform a right rotation on right child, then left rotation on current node)
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Other methods (such as search, delete, etc.) can also be added here
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(3);
avlTree.insert(7);
