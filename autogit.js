// Node class to represent nodes in the AVL tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVLTree class to handle AVL operations
class AVLTree {
  constructor() {
    this.root = null;
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
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Rotate right at a given node
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  // Rotate left at a given node
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Helper function to insert a node into the AVL tree
  insertNode(root, value) {
    if (root === null) return new Node(value);
    if (value < root.value) {
      root.left = this.insertNode(root.left, value);
    } else {
      root.right = this.insertNode(root.right, value);
    }
    this.updateHeight(root);

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1) {
      if (value < root.left.value) {
        return this.rotateRight(root);
      } else {
        root.left = this.rotateLeft(root.left);
        return this.rotateRight(root);
      }
    }

    if (balanceFactor < -1) {
      if (value > root.right.value) {
        return this.rotateLeft(root);
      } else {
        root.right = this.rotateRight(root.right);
        return this.rotateLeft(root);
      }
    }

    return root;
  }

  // Delete a node from the AVL tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Helper function to delete a node from the AVL tree
  deleteNode(root, value) {
    if (root === null) return null;
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left === null && root.right === null) {
        root = null;
      } else if (root.left === null) {
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      } else {
        const minValue = this.findMinValue(root.right);
        root.value = minValue;
        root.right = this.deleteNode(root.right, minValue);
      }
    }

    if (root === null) return null;
    this.updateHeight(root);

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(root.left) >= 0) {
        return this.rotateRight(root);
      } else {
        root.left = this.rotateLeft(root.left);
        return this.rotateRight(root);
      }
    }

    if (balanceFactor < -1) {
      if (this.getBalanceFactor(root.right) <= 0) {
        return this.rotateLeft(root);
      } else {
        root.right = this.rotateRight(root.right);
        return this.rotateLeft(root);
      }
    }

    return root;
  }

  // Find the minimum value in a subtree
  findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // In-order traversal of the AVL tree
  inorderTraversal(node = this.root, callback = console.log) {
    if (node !== null) {
      this.inorderTraversal(node.left, callback);
      callback(node.value);
      this.inorderTraversal(node.right, callback);
    }
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log("In-order traversal:");
avlTree.inorderTraversal();  // Output: 10, 20, 25, 30, 40, 50

avlTree.delete(30);

console.log("In-order traversal after deleting 30:");
avlTree.inorderTraversal();  // Output: 10, 20, 25, 40, 50
