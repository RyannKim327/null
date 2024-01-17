class AVLNode {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to calculate the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    if (node === null) {
      return;
    }
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to perform a right rotation
  rotateRight(node) {
    const leftChild = node.left;
    const leftRightChild = leftChild.right;

    // Perform rotation
    leftChild.right = node;
    node.left = leftRightChild;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(leftChild);

    return leftChild; // new root
  }

  // Helper function to perform a left rotation
  rotateLeft(node) {
    const rightChild = node.right;
    const rightLeftChild = rightChild.left;

    // Perform rotation
    rightChild.left = node;
    node.right = rightLeftChild;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(rightChild);

    return rightChild; // new root
  }

  // Helper function to balance a node
  balance(node) {
    if (this.getBalanceFactor(node) > 1) {
      // Left subtree is taller

      if (this.getBalanceFactor(node.left) < 0) {
        // Left-right case
        node.left = this.rotateLeft(node.left);
      }
      // Left-left case
      return this.rotateRight(node);
    }

    if (this.getBalanceFactor(node) < -1) {
      // Right subtree is taller

      if (this.getBalanceFactor(node.right) > 0) {
        // Right-left case
        node.right = this.rotateRight(node.right);
      }
      // Right-right case
      return this.rotateLeft(node);
    }

    // Node is already balanced
    return node;
  }

  // Public method to insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Private method to insert a value recursively
  insertNode(node, value) {
    // Perform regular BST insertion
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }

    // Update height of the current node
    this.updateHeight(node);

    // Balance the current node if necessary
    return this.balance(node);
  }

  // Public method to remove a value from the AVL tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Private method to remove a value recursively
  removeNode(node, value) {
    // Perform regular BST deletion
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Found the node to be deleted

      if (node.left === null && node.right === null) {
        // Node has no children
        return null;
      } else if (node.left === null) {
        // Node has only right child
        return node.right;
      } else if (node.right === null) {
        // Node has only left child
        return node.left;
      } else {
        // Node has both children
        const successor = this.findMinNode(node.right);
        node.value = successor.value;
        node.right = this.removeNode(node.right, successor.value);
      }
    }

    // Update height of the current node
    this.updateHeight(node);

    // Balance the current node if necessary
    return this.balance(node);
  }

  // Helper function to find the node with the minimum value in a subtree
  findMinNode(node) {
    if (node === null) {
      return null;
    }
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Public method to check if a value exists in the AVL tree
  contains(value) {
    return this.containsNode(this.root, value);
  }

  // Private method to check if a value exists recursively
  containsNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }

  // Public method to perform an in-order traversal of the AVL tree
  traverseInOrder() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  // Private method to perform an in-order traversal recursively
  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }

  // Public method to get the height of the AVL tree
  getHeight() {
    return this.getHeight(this.root);
  }

  // Public method to get the balance factor of the AVL tree
  getBalanceFactor() {
    return this.getBalanceFactor(this.root);
  }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(10);
avlTree.insert(15);
avlTree.insert(20);
avlTree.insert(25);
avlTree.remove(15);
console.log(avlTree.traverseInOrder()); // Output: [5, 10, 20, 25]
console.log(avlTree.getHeight()); // Output: 3
console.log(avlTree.getBalanceFactor()); // Output: 0
