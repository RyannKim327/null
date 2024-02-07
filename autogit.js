class AVLNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Insert a new key into the AVL tree
  insert(key) {
    this.root = this._insertNode(this.root, key);
  }

  // Private helper method to insert a key recursively
  _insertNode(root, key) {
    // Step 1: Perform the normal BST insertion
    if (root === null) {
      return new AVLNode(key);
    }

    if (key < root.key) {
      root.left = this._insertNode(root.left, key);
    } else if (key > root.key) {
      root.right = this._insertNode(root.right, key);
    } else {
      // Duplicate keys are not allowed
      return root;
    }

    // Step 2: Update height of the ancestor node
    root.height = 1 + Math.max(this._getHeight(root.left), this._getHeight(root.right));

    // Step 3: Get the balance factor and perform balancing if needed
    const balanceFactor = this._getBalanceFactor(root);

    if (balanceFactor > 1) {
      // Left rotation is required
      if (key < root.left.key) {
        return this._rotateRight(root);
      }
      
      // Left-Right rotation is required
      if (key > root.left.key) {
        root.left = this._rotateLeft(root.left);
        return this._rotateRight(root);
      }
    }

    if (balanceFactor < -1) {
      // Right rotation is required
      if (key > root.right.key) {
        return this._rotateLeft(root);
      }
      
      // Right-Left rotation is required
      if (key < root.right.key) {
        root.right = this._rotateRight(root.right);
        return this._rotateLeft(root);
      }
    }

    return root;
  }

  // Perform left rotation on the given node
  _rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    // Perform rotation
    y.left = z;
    z.right = T2;

    // Update heights
    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

    return y;
  }

  // Perform right rotation on the given node
  _rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    // Perform rotation
    y.right = z;
    z.left = T3;

    // Update heights
    z.height = 1 + Math.max(this._getHeight(z.left), this._getHeight(z.right));
    y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

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

  // Print the AVL tree in sorted order
  inOrder() {
    this._inOrderTraversal(this.root);
  }

  // Private helper method to traverse the tree in sorted order
  _inOrderTraversal(node) {
    if (node !== null) {
      this._inOrderTraversal(node.left);
      console.log(node.key);
      this._inOrderTraversal(node.right);
    }
  }
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

avlTree.inOrder(); // Outputs: 10 20 30
