// Node class for AVL tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVL Tree class
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Add a value to the tree
  add(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height = Math.max(this.getHeight(newRoot.right), node.height) + 1;
    return newRoot;
  }

  // Perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height = Math.max(this.getHeight(newRoot.left), node.height) + 1;
    return newRoot;
  }

  // Get the height of a node
  getHeight(node) {
    if (!node) {
      return 0;
    }
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Insert a value into the tree
  insertNode(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL trees
      return node;
    }

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Utility function to traverse the tree in inorder
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}
const avlTree = new AVLTree();
avlTree.add(10);
avlTree.add(20);
avlTree.add(30);
avlTree.add(40);
avlTree.add(50);

avlTree.inorder(avlTree.root);
