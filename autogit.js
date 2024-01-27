class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Insert a node into the AVL tree
  insert(data) {
    this.root = this._insertNode(this.root, data);
  }

  // Private method to recursively insert a node
  _insertNode(root, data) {
    // Step 1: Perform a standard BST insertion
    if (root === null) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this._insertNode(root.left, data);
    } else {
      root.right = this._insertNode(root.right, data);
    }

    // Step 2: Update the height of the current node
    root.height = Math.max(this._getHeight(root.left), this._getHeight(root.right)) + 1;

    // Step 3: Check if the node is unbalanced and perform the necessary rotations
    const balanceFactor = this._getBalanceFactor(root);

    // Left-Left case
    if (balanceFactor > 1 && data < root.left.data) {
      return this._rotateRight(root);
    }

    // Right-Right case
    if (balanceFactor < -1 && data > root.right.data) {
      return this._rotateLeft(root);
    }

    // Left-Right case
    if (balanceFactor > 1 && data > root.left.data) {
      root.left = this._rotateLeft(root.left);
      return this._rotateRight(root);
    }

    // Right-Left case
    if (balanceFactor < -1 && data < root.right.data) {
      root.right = this._rotateRight(root.right);
      return this._rotateLeft(root);
    }

    return root;
  }

  // Delete a node from the AVL tree
  delete(data) {
    this.root = this._deleteNode(this.root, data);
  }

  // Private method to recursively delete a node
  _deleteNode(root, data) {
    // Step 1: Perform a standard BST deletion
    if (root === null) {
      return root;
    }

    if (data < root.data) {
      root.left = this._deleteNode(root.left, data);
    } else if (data > root.data) {
      root.right = this._deleteNode(root.right, data);
    } else {
      // Node found, perform deletion

      // Case 1: Node has no children or only one child
      if (root.left === null || root.right === null) {
        root = root.left || root.right;
      } else {
        // Case 2: Node has two children
        const minValue = this._findMinValue(root.right);
        root.data = minValue;
        root.right = this._deleteNode(root.right, minValue);
      }
    }

    if (root === null) {
      return root;
    }

    // Step 2: Update the height of the current node
    root.height = Math.max(this._getHeight(root.left), this._getHeight(root.right)) + 1;

    // Step 3: Check if the node is unbalanced and perform the necessary rotations
    const balanceFactor = this._getBalanceFactor(root);

    // Left-Left case
    if (balanceFactor > 1 && this._getBalanceFactor(root.left) >= 0) {
      return this._rotateRight(root);
    }

    // Right-Right case
    if (balanceFactor < -1 && this._getBalanceFactor(root.right) <= 0) {
      return this._rotateLeft(root);
    }

    // Left-Right case
    if (balanceFactor > 1 && this._getBalanceFactor(root.left) < 0) {
      root.left = this._rotateLeft(root.left);
      return this._rotateRight(root);
    }

    // Right-Left case
    if (balanceFactor < -1 && this._getBalanceFactor(root.right) > 0) {
      root.right = this._rotateRight(root.right);
      return this._rotateLeft(root);
    }

    return root;
  }

  // Find the minimum value in a subtree
  _findMinValue(root) {
    let minValue = root.data;
    while (root.left !== null) {
      minValue = root.left.data;
      root = root.left;
    }
    return minValue;
  }

  // Rotate a subtree to the left
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    // Perform rotation
    y.left = z;
    z.right = T2;

    // Update heights
    z.height = Math.max(this._getHeight(z.left), this._getHeight(z.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }

  // Rotate a subtree to the right
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    // Perform rotation
    y.right = z;
    z.left = T3;

    // Update heights
    z.height = Math.max(this._getHeight(z.left), this._getHeight(z.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }

  // Get the height of a node
  _getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the balance factor of a node
  _getBalanceFactor(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }
}
