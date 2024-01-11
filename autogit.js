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

  // Helper function to get the height of a node
  getHeight(node) {
    if (node === null)
      return 0;
    return node.height;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null)
      return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Helper function to perform a right rotation
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  // Helper function to perform a left rotation
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  // Function to insert a value into the AVL tree
  insert(value) {
    this.root = this.insertRecursive(this.root, value);
  }

  // Recursive helper function to insert a value into the AVL tree
  insertRecursive(node, value) {
    // Perform regular BST insertion
    if (node === null)
      return new AVLNode(value);
    if (value < node.value)
      node.left = this.insertRecursive(node.left, value);
    else if (value > node.value)
      node.right = this.insertRecursive(node.right, value);
    else // Duplicate values are not allowed
      return node;

    // Update height of the current node
    this.updateHeight(node);

    // Perform balance factor check and rotations if necessary
    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1 && value < node.left.value) // Left Left case
      return this.rotateRight(node);

    if (balanceFactor < -1 && value > node.right.value) // Right Right case
      return this.rotateLeft(node);

    if (balanceFactor > 1 && value > node.left.value) { // Left Right case
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balanceFactor < -1 && value < node.right.value) { // Right Left case
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Function to delete a value from the AVL tree
  delete(value) {
    this.root = this.deleteRecursive(this.root, value);
  }

  // Recursive helper function to delete a value from the AVL tree
  deleteRecursive(node, value) {
    // Perform regular BST deletion
    if (node === null)
      return node;
    if (value < node.value)
      node.left = this.deleteRecursive(node.left, value);
    else if (value > node.value)
      node.right = this.deleteRecursive(node.right, value);
    else {
      // Node to be deleted has no child or only one child
      if (node.left === null || node.right === null) {
        const child = node.left ? node.left : node.right;
        if (child === null) {
          node = null;
        } else {
          node.value = child.value;
          node.left = child.left;
          node.right = child.right;
        }
      } else {
        // Node to be deleted has two children
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.deleteRecursive(node.right, minValue);
      }
    }

    if (node === null)
      return node;

    // Update height of the current node
    this.updateHeight(node);

    // Perform balance factor check and rotations if necessary
    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) // Left Left case
      return this.rotateRight(node);

    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) { // Left Right case
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) // Right Right case
      return this.rotateLeft(node);

    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) { // Right Left case
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Helper function to find the minimum value in a subtree
  findMinValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  // Function to perform an inorder traversal of the AVL tree
  inorderTraversal(node, result = []) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(2);
avlTree.insert(4);
avlTree.insert(6);
avlTree.insert(8);

console.log(avlTree.inorderTraversal()); // [2, 3, 4, 5, 6, 7, 8]

avlTree.delete(4);

console.log(avlTree.inorderTraversal()); // [2, 3, 5, 6, 7, 8]
