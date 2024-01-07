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

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Insert a node recursively
  insertNode(node, value) {
    // Perform regular BST insertion
    if (node === null) {
      return new Node(value);
    }
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values not allowed in this implementation
      return node;
    }

    // Update height of ancestor node
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Balance the node if it becomes unbalanced
    return this.balanceNode(node);
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Delete a node recursively
  deleteNode(node, value) {
    // Perform regular BST deletion
    if (node === null) {
      return node;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node to be deleted found
      if (node.left === null && node.right === null) {
        // No children
        node = null;
      } else if (node.left === null || node.right === null) {
        // One child
        node = node.left || node.right;
      } else {
        // Two children
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
      }
    }

    if (node === null) {
      return node;
    }

    // Update height of ancestor node
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Balance the node if it becomes unbalanced
    return this.balanceNode(node);
  }

  // Get the height of a node
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the balance factor of a node
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Balance a node if it becomes unbalanced
  balanceNode(node) {
    const balanceFactor = this.getBalance(node);

    // Left Left Case
    if (balanceFactor > 1 && this.getBalance(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && this.getBalance(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && this.getBalance(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node; // No imbalance, return the node unchanged
  }

  // Rotate a subtree to the left
  rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  // Rotate a subtree to the right
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  // Find the minimum value in a subtree
  findMinValue(node) {
    return node.left ? this.findMinValue(node.left) : node.value;
  }

  // Inorder traversal of the tree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

// Usage:

const avlTree = new AVLTree();
avlTree.insert(9);
avlTree.insert(5);
avlTree.insert(10);
avlTree.delete(5);
avlTree.inorder(avlTree.root);
