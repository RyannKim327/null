class AVLTree {
  constructor() {
    this.root = null;
  }

  // Node class
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }

  // Get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Rotate left
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Rotate right
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Insert a node
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    // Perform regular BST insertion
    if (root === null) return new Node(value);
    if (value < root.value) root.left = this.insertNode(root.left, value);
    else if (value > root.value) root.right = this.insertNode(root.right, value);
    else return root; // Duplicate values are not allowed

    // Update height of the ancestor node
    this.updateHeight(root);

    // Perform AVL tree balancing
    const balanceFactor = this.getBalanceFactor(root);

    // Left Left Case
    if (balanceFactor > 1 && value < root.left.value)
      return this.rotateRight(root);

    // Right Right Case
    if (balanceFactor < -1 && value > root.right.value)
      return this.rotateLeft(root);

    // Left Right Case
    if (balanceFactor > 1 && value > root.left.value) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left Case
    if (balanceFactor < -1 && value < root.right.value) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  // Search for a value in the tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    if (root === null) return false;
    if (value === root.value) return true;
    if (value < root.value) return this.searchNode(root.left, value);
    return this.searchNode(root.right, value);
  }

  // Remove a node from the tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(root, value) {
    // Perform regular BST deletion
    if (root === null) return root;

    if (value < root.value) root.left = this.removeNode(root.left, value);
    else if (value > root.value) root.right = this.removeNode(root.right, value);
    else {
      // Node to be deleted found
      if (root.left === null || root.right === null) {
        // Node with only one child or no child
        const temp = root.left || root.right;

        if (temp === null) {
          // No child case
          root = null;
        } else {
          // One child case
          root = temp;
        }
      } else {
        // Node with two children
        const temp = this.getMinValueNode(root.right);
        root.value = temp.value;
        root.right = this.removeNode(root.right, temp.value);
      }
    }

    if (root === null) return root; // If the tree had only one node

    // Update the height of the ancestor node
    this.updateHeight(root);

    // Perform AVL tree balancing
    const balanceFactor = this.getBalanceFactor(root);

    // Left Left Case
    if (balanceFactor > 1 && this.getBalanceFactor(root.left) >= 0)
      return this.rotateRight(root);

    // Right Right Case
    if (balanceFactor < -1 && this.getBalanceFactor(root.right) <= 0)
      return this.rotateLeft(root);

    // Left Right Case
    if (balanceFactor > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left Case
    if (balanceFactor < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  // Get the minimum value node in a subtree
  getMinValueNode(node) {
    let current = node;

    while (current.left !== null)
      current = current.left;

    return current;
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree.search(20)); // Output: true

avlTree.remove(20);

console.log(avlTree.search(20)); // Output: false
