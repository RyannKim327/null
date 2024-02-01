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

  // Method to insert a value into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  // Private method to insert a value recursively
  _insertNode(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    const balanceFactor = this._getBalanceFactor(node);

    if (balanceFactor > 1 && value < node.left.value) {
      // Left Left Case
      return this._rotateRight(node);
    }
    if (balanceFactor < -1 && value > node.right.value) {
      // Right Right Case
      return this._rotateLeft(node);
    }
    if (balanceFactor > 1 && value > node.left.value) {
      // Left Right Case
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }
    if (balanceFactor < -1 && value < node.right.value) {
      // Right Left Case
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Method to delete a value from the AVL tree
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  // Private method to delete a value recursively
  _deleteNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        // Case 1: No child
        return null;
      }
      if (!node.left || !node.right) {
        // Case 2: One child
        return node.left ? node.left : node.right;
      }
      // Case 3: Two children
      const minRightNode = this._findMinNode(node.right);
      node.value = minRightNode.value;
      node.right = this._deleteNode(node.right, minRightNode.value);
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    const balanceFactor = this._getBalanceFactor(node);

    if (balanceFactor > 1 && this._getBalanceFactor(node.left) >= 0) {
      // Left Left Case
      return this._rotateRight(node);
    }
    if (balanceFactor < -1 && this._getBalanceFactor(node.right) <= 0) {
      // Right Right Case
      return this._rotateLeft(node);
    }
    if (balanceFactor > 1 && this._getBalanceFactor(node.left) < 0) {
      // Left Right Case
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }
    if (balanceFactor < -1 && this._getBalanceFactor(node.right) > 0) {
      // Right Left Case
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Method to get the balance factor of a node
  _getBalanceFactor(node) {
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  // Method to get the height of a node
  _getHeight(node) {
    return node ? node.height : 0;
  }

  // Method to perform a right rotation
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Method to perform a left rotation
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Method to find the node with minimum value in a subtree
  _findMinNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  // Method to traverse the tree in order (left-root-right)
  inOrder() {
    this._inOrder(this.root);
  }

  // Private method to traverse the tree recursively
  _inOrder(node) {
    if (node) {
      this._inOrder(node.left);
      console.log(node.value);
      this._inOrder(node.right);
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

avlTree.inOrder(); // Output: 10 20 25 30 40 50
avlTree.delete(30);

avlTree.inOrder(); // Output: 10 20 25 40 50
