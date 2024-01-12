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
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to update the height of a node
  updateNodeHeight(node) {
    node.height = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }
  
  // Helper function to perform a right rotation
  rightRotate(z) {
    const y = z.left;
    const T3 = y.right;

    // Perform rotation
    y.right = z;
    z.left = T3;

    // Update heights
    this.updateNodeHeight(z);
    this.updateNodeHeight(y);

    return y;
  }

  // Helper function to perform a left rotation
  leftRotate(z) {
    const y = z.right;
    const T2 = y.left;

    // Perform rotation
    y.left = z;
    z.right = T2;

    // Update heights
    this.updateNodeHeight(z);
    this.updateNodeHeight(y);

    return y;
  }
  
  // Helper function to balance the tree at a given node
  balanceNode(node) {
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
  
  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Helper function to insert a value into the AVL tree
  insertNode(node, value) {
    // Perform standard BST insertion
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

    // Balance the tree if required
    return this.balanceNode(node);
  }
  
  // Print the AVL tree in an in-order traversal
  printInOrder() {
    this.printInOrderNode(this.root);
  }
  
  // Helper function to print the AVL tree in an in-order traversal
  printInOrderNode(node) {
    if (node !== null) {
      this.printInOrderNode(node.left);
      console.log(node.value);
      this.printInOrderNode(node.right);
    }
  }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);
avlTree.printInOrder();
