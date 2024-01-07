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

  // Utility function to get the height of a node
  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  // Utility function to get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Utility function to update the height of a node
  updateHeight(node) {
    if (!node) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Utility function to perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    // Perform rotation
    newRoot.right = node;
    node.left = temp;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Utility function to perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    // Perform rotation
    newRoot.left = node;
    node.right = temp;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Utility function to balance a node
  balanceNode(node) {
    // Update height
    this.updateHeight(node);

    // Check balance factor
    const balanceFactor = this.getBalanceFactor(node);

    // Perform rotations if needed
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    // Perform the normal BST insertion
    if (!node) {
      return new Node(value);
    }
    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      return node; // Duplicate values not allowed
    }

    // Update height and balance the node
    return this.balanceNode(node);
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    // Perform the normal BST deletion
    if (!node) return node;
    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      // Node to be deleted found

      // Case 1: No child or a single child
      if (!node.left || !node.right) {
        node = node.left ? node.left : node.right;
      } else {
        // Case 2: Two children
        const minRight = this._findMin(node.right);
        node.value = minRight.value;
        node.right = this._delete(node.right, minRight.value);
      }
    }

    // If the tree had only one node, return
    if (!node) return node;

    // Balance the node
    return this.balanceNode(node);
  }

  // Utility function to find the minimum node in a subtree
  _findMin(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  // Perform an inorder traversal of the AVL tree
  inorderTraversal() {
    this._inorderTraversal(this.root);
  }

  _inorderTraversal(node) {
    if (node) {
      this._inorderTraversal(node.left);
      console.log(node.value);
      this._inorderTraversal(node.right);
    }
  }
}

// Usage example:
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(6);
avlTree.insert(8);
avlTree.insert(2);
avlTree.inorderTraversal(); // Output: 2 3 5 6 7 8
avlTree.delete(7);
avlTree.inorderTraversal(); // Output: 2 3 5 6 8
