class Node {
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

  // Helper function to get the height of a node
  getHeight(node) {
    if (node == null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node == null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    if (node == null) {
      return;
    }
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Helper function to perform a right rotation
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  // Helper function to perform a left rotation
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  // Insert a key into the AVL tree
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // Ignore duplicate keys
    }

    this.updateHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && key < node.left.key) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && key > node.right.key) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && key > node.left.key) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && key < node.right.key) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Perform an in-order traversal on the AVL tree
  inOrderTraversal(node) {
    if (node != null) {
      this.inOrderTraversal(node.left);
      console.log(node.key);
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
