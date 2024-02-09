class AVLTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node into the AVL tree
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  // Private method to insert a node recursively
  _insertNode(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value < root.value) {
      root.left = this._insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._insertNode(root.right, value);
    } else {
      // Duplicate values are not allowed in AVL trees
      return root;
    }

    // Update the height of the current node
    root.height = 1 + Math.max(this._getHeight(root.left), this._getHeight(root.right));

    // Check if the node is unbalanced and perform rotations if necessary
    const balanceFactor = this._getBalanceFactor(root);

    if (balanceFactor > 1 && value < root.left.value) {
      // Left Left case
      return this._rotateRight(root);
    }
    if (balanceFactor < -1 && value > root.right.value) {
      // Right Right case
      return this._rotateLeft(root);
    }
    if (balanceFactor > 1 && value > root.left.value) {
      // Left Right case
      root.left = this._rotateLeft(root.left);
      return this._rotateRight(root);
    }
    if (balanceFactor < -1 && value < root.right.value) {
      // Right Left case
      root.right = this._rotateRight(root.right);
      return this._rotateLeft(root);
    }

    return root;
  }

  // Get the height of a node (handles null nodes)
  _getHeight(node) {
    return node ? node.height : 0;
  }

  // Get the balance factor of a node (the height difference between its left and right subtrees)
  _getBalanceFactor(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }

  // Perform a right rotation on a node
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    // Update heights
    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Perform a left rotation on a node
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    // Update heights
    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // Initial height of a new node is 1
  }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
