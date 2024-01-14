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

  // Get the height of a node
  getHeight(node) {
    if (!node) {
      return 0;
    }
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (!node) {
      return;
    }
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    const newRootRight = newRoot.right;

    // Perform rotation
    newRoot.right = node;
    node.left = newRootRight;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    const newRootLeft = newRoot.left;

    // Perform rotation
    newRoot.left = node;
    node.right = newRootLeft;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Balance the AVL tree
  balance(node) {
    // Update height
    this.updateHeight(node);

    // Check balance factor
    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insertHelper(this.root, value);
  }

  _insertHelper(node, value) {
    // Perform regular BST insertion
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertHelper(node.left, value);
    } else {
      node.right = this._insertHelper(node.right, value);
    }

    // Update the height of the ancestor node
    this.updateHeight(node);

    // Balance the tree
    return this.balance(node);
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this._deleteHelper(this.root, value);
  }

  _deleteHelper(node, value) {
    // Perform regular BST deletion
    if (!node) {
      return node;
    }

    if (value < node.value) {
      node.left = this._deleteHelper(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteHelper(node.right, value);
    } else {
      // Node to be deleted found

      // Node with only one child or no child
      if (!node.left || !node.right) {
        const temp = node.left || node.right;
        node = null;
        return temp;
      }

      // Node with two children: Get the inorder successor (smallest
      // in the right subtree)
      const temp = this._getMinValueNode(node.right);

      // Copy the inorder successor's data to this node
      node.value = temp.value;

      // Delete the inorder successor
      node.right = this._deleteHelper(node.right, temp.value);
    }

    // Update the height of the ancestor node
    this.updateHeight(node);

    // Balance the tree
    return this.balance(node);
  }

  // Get the node with the minimum value (leftmost node)
  _getMinValueNode(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  // Search for a value in the AVL tree
  search(value) {
    return this._searchHelper(this.root, value);
  }

  _searchHelper(node, value) {
    if (!node || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this._searchHelper(node.left, value);
    } else {
      return this._searchHelper(node.right, value);
    }
  }
}
