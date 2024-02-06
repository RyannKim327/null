// Node class represents a node in the AVL tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVLTree class represents the AVL tree
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to calculate the height of a node in the tree
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    if (node === null) return;

    node.height = 1 + Math.max(
      this.getHeight(node.left),
      this.getHeight(node.right)
    );
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to perform a right rotation on a node
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    // Perform rotation
    y.right = z;
    z.left = T3;

    // Update heights
    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Helper function to perform a left rotation on a node
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    // Perform rotation
    y.left = z;
    z.right = T2;

    // Update heights
    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Helper function to insert a value into the AVL tree recursively
  insertNode(root, value) {
    // Perform normal BST insertion
    if (root === null) return new Node(value);
    if (value < root.value) root.left = this.insertNode(root.left, value);
    else if (value > root.value) root.right = this.insertNode(root.right, value);
    else return root; // Duplicate values are not allowed

    // Update height of current node
    this.updateHeight(root);

    // Check the balance factor and rebalance if necessary
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

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Helper function to delete a value from the AVL tree recursively
  deleteNode(root, value) {
    // Perform normal BST deletion
    if (root === null) return root;
    if (value < root.value) root.left = this.deleteNode(root.left, value);
    else if (value > root.value) root.right = this.deleteNode(root.right, value);
    else {
      // Node to delete found

      if (root.left === null || root.right === null) {
        // No child or one child case
        const child = root.left || root.right;
        root = child;
      } else {
        // Two children case
        const successor = this.findMinNode(root.right);
        root.value = successor.value;
        root.right = this.deleteNode(root.right, successor.value);
      }
    }

    if (root === null) return root; // If the tree had only one element

    // Update height of current node
    this.updateHeight(root);

    // Check the balance factor and rebalance if necessary
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

  // Helper function to find the node with minimum value
  findMinNode(root) {
    let current = root;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Perform an in-order traversal of the AVL tree
  inOrderTraversal(callback) {
    this.inOrderTraversalRecursion(this.root, callback);
  }

  // Helper function to perform an in-order traversal recursively
  inOrderTraversalRecursion(node, callback) {
    if (node === null) return;
    this.inOrderTraversalRecursion(node.left, callback);
    callback(node.value);
    this.inOrderTraversalRecursion(node.right, callback);
  }
}
const avlTree = new AVLTree();

// Insert values into the AVL tree
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);

// Delete a value from the AVL tree
avlTree.delete(30);

// Traverse the AVL tree
avlTree.inOrderTraversal((value) => {
  console.log(value);
});
