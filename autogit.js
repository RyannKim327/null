class AVLTree {
  constructor() {
    this.root = null;
  }

  // Node class representing a single node in the AVL tree
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  // Internal helper method to recursively insert a value
  _insertNode(node, value) {
    // Perform regular BST insertion
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      return node; // Duplicate values are not allowed
    }

    // Update height of the current node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    // Perform balancing if necessary
    return this._balance(node);
  }

  // Delete a value from the AVL tree
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  // Internal helper method to recursively delete a value
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
      // Node to be deleted found

      // Case 1: No child or only one child
      if (node.left === null || node.right === null) {
        node = node.left ? node.left : node.right;
      } else {
        // Case 2: Two children
        const minRight = this._minValueNode(node.right);
        node.value = minRight.value;
        node.right = this._deleteNode(node.right, minRight.value);
      }
    }

    if (node === null) {
      return node;
    }

    // Update height of the current node
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    // Perform balancing if necessary
    return this._balance(node);
  }

  // Search for a value in the AVL tree
  search(value) {
    return this._searchNode(this.root, value);
  }

  // Internal helper method to recursively search for a value
  _searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this._searchNode(node.left, value);
    } else if (value > node.value) {
      return this._searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Generate an array of tree values in in-order traversal
  inOrderTraversal() {
    const result = [];
    this._inOrder(this.root, result);
    return result;
  }

  // Internal helper method to recursively perform in-order traversal
  _inOrder(node, result) {
    if (node !== null) {
      this._inOrder(node.left, result);
      result.push(node.value);
      this._inOrder(node.right, result);
    }
  }

  // Perform left rotation
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    // Perform rotation
    y.left = z;
    z.right = T2;

    // Update heights
    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    // Return the new root
    return y;
  }

  // Perform right rotation
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    // Perform rotation
    y.right = z;
    z.left = T3;

    // Update heights
    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    // Return the new root
    return y;
  }

  // Get the height of a node
  _getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Get the balance factor of a node
  _getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  // Balance the tree
  _balance(node) {
    // Left heavy
    if (this._getBalanceFactor(node) > 1) {
      // Left-Left case
      if (this._getBalanceFactor(node.left) >= 0) {
        return this._rotateRight(node);
      }
      // Left-Right case
      else {
        node.left = this._rotateLeft(node.left);
        return this._rotateRight(node);
      }
    }
    // Right heavy
    else if (this._getBalanceFactor(node) < -1) {
      // Right-Right case
      if (this._getBalanceFactor(node.right) <= 0) {
        return this._rotateLeft(node);
      }
      // Right-Left case
      else {
        node.right = this._rotateRight(node.right);
        return this._rotateLeft(node);
      }
    }
    return node;
  }

  // Find the node with the minimum value in a subtree
  _minValueNode(node) {
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
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log(avlTree.inOrderTraversal()); // [10, 20, 25, 30, 40, 50]

avlTree.delete(30);

console.log(avlTree.inOrderTraversal()); // [10, 20, 25, 40, 50]

console.log(avlTree.search(40)); // true
console.log(avlTree.search(60)); // false
