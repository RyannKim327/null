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
    if (node == null) return 0;
    return node.height;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node == null) return 0;
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // Helper function to update the height of a node
  updateNodeHeight(node) {
    if (node == null) return;
    node.height = Math.max(
      this.getNodeHeight(node.left),
      this.getNodeHeight(node.right)
    ) + 1;
  }

  // Rotate the given node to the left
  rotateLeft(node) {
    const newRoot = node.right;
    const tmp = newRoot.left;

    newRoot.left = node;
    node.right = tmp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Rotate the given node to the right
  rotateRight(node) {
    const newRoot = node.left;
    const tmp = newRoot.right;

    newRoot.right = node;
    node.left = tmp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  // Insert a new value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node == null) return new Node(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL trees
      return node;
    }

    this.updateNodeHeight(node); // Update the height of the current node

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

  // Print the AVL tree in-order
  printInOrder() {
    this.printInOrderNode(this.root);
  }

  printInOrderNode(node) {
    if (node != null) {
      this.printInOrderNode(node.left);
      console.log(node.value);
      this.printInOrderNode(node.right);
    }
  }
}

// Usage
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(3);
avlTree.insert(8);
avlTree.insert(2);
avlTree.insert(4);

avlTree.printInOrder(); // Output: 2 3 4 5 8
