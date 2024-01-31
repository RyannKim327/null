// AVLNode represents a node in the AVL tree
class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVLTree represents the AVL tree
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  // Private method to insert a node recursively
  _insertNode(node, value) {
    // Perform regular BST insertion
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed
      return node;
    }

    // Update the height of the current node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    // Check if the node is balanced
    const balanceFactor = this._getBalanceFactor(node);

    // Left-Left case
    if (balanceFactor > 1 && value < node.left.value) {
      return this._rotateRight(node);
    }

    // Right-Right case
    if (balanceFactor < -1 && value > node.right.value) {
      return this._rotateLeft(node);
    }

    // Left-Right case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    // Right-Left case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  // Private method to delete a node recursively
  _deleteNode(node, value) {
    // Perform regular BST deletion
    if (node === null) {
      return node;
    }

    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      // Node found

      // Case 1: No child or only one child
      if (node.left === null || node.right === null) {
        node = node.left || node.right;
      } else {
        // Case 2: Two children
        const minNode = this._findMin(node.right);
        node.value = minNode.value;
        node.right = this._deleteNode(node.right, minNode.value);
      }
    }

    // If the AVL tree had only one node, no need to continue
    if (node === null) {
      return node;
    }

    // Update the height of the current node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    // Check if the node is balanced
    const balanceFactor = this._getBalanceFactor(node);

    // Left-Left case
    if (balanceFactor > 1 && this._getBalanceFactor(node.left) >= 0) {
      return this._rotateRight(node);
    }

    // Right-Right case
    if (balanceFactor < -1 && this._getBalanceFactor(node.right) <= 0) {
      return this._rotateLeft(node);
    }

    // Left-Right case
    if (balanceFactor > 1 && this._getBalanceFactor(node.left) < 0) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    // Right-Left case
    if (balanceFactor < -1 && this._getBalanceFactor(node.right) > 0) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Get the height of a node (handles null nodes)
  _getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the balance factor of a node
  _getBalanceFactor(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }

  // Rotate the tree node to the left
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Rotate the tree node to the right
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Find the node with the minimum value in the AVL tree
  _findMin(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree.root); // AVLNode {value: 20, left: AVLNode, right: AVLNode, height: 2}

avlTree.delete(20);

console.log(avlTree.root); // AVLNode {value: 30, left: AVLNode, right: null, height: 2}
