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

  // Helper function to calculate the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function to perform left rotation
  leftRotate(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Helper function to perform right rotation
  rightRotate(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    this.updateHeight(z);
    this.updateHeight(y);

    return y;
  }

  // Helper function to balance the tree after an insertion or deletion
  balance(node) {
    if (node === null) return null;

    this.updateHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      // Left-Left case
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rightRotate(node);
      }
      // Left-Right case
      else if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    } else if (balanceFactor < -1) {
      // Right-Right case
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.leftRotate(node);
      }
      // Right-Left case
      else if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  // Public method to insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Helper function to insert a value into the AVL tree
  insertNode(node, value) {
    if (node === null) return new Node(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed
      return node;
    }

    return this.balance(node);
  }

  // Public method to remove a value from the AVL tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper function to remove a value from the AVL tree
  removeNode(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Found the node to be removed
      if (node.left === null && node.right === null) {
        // Leaf node case
        node = null;
      } else if (node.left === null) {
        // Node with only a right child
        node = node.right;
      } else if (node.right === null) {
        // Node with only a left child
        node = node.left;
      } else {
        // Node with both left and right children
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.removeNode(node.right, minValue);
      }
    }

    return this.balance(node);
  }

  // Helper function to find the minimum value in a subtree
  findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // Public method to print the AVL tree in-order
  printInOrder() {
    this.printNodeInOrder(this.root);
  }

  // Helper function to print the AVL tree in-order
  printNodeInOrder(node) {
    if (node === null) return;

    this.printNodeInOrder(node.left);
    console.log(node.value);
    this.printNodeInOrder(node.right);
  }
}

// Example usage
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(10);
avlTree.insert(15);
avlTree.printInOrder(); // Output: 5 10 15
avlTree.remove(10);
avlTree.printInOrder(); // Output: 5 15
