class AVLNode {
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

  // Calculate the height of a node
  height(node) {
    if (node === null)
      return 0;
    return node.height;
  }

  // Update the height of a node
  updateHeight(node) {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // Right rotate a subtree rooted with a given node
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    // Return new root
    return x;
  }

  // Left rotate a subtree rooted with a given node
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    // Return new root
    return y;
  }

  // Get the balance factor of a node
  getBalance(node) {
    if (node === null)
      return 0;
    return this.height(node.left) - this.height(node.right);
  }

  // Insert a new node into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    // Standard BST insertion
    if (node === null)
      return new AVLNode(value);

    if (value < node.value)
      node.left = this.insertNode(node.left, value);
    else if (value > node.value)
      node.right = this.insertNode(node.right, value);
    else // Duplicate values are not allowed
      return node;

    // Update the height of the ancestor node
    this.updateHeight(node);

    // Balance the tree if necessary
    const balance = this.getBalance(node);
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // In-order traversal of the AVL tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
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

avlTree.inOrderTraversal(avlTree.root);
