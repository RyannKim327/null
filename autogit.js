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

  // Calculate height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Update the height of a node
  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Perform left rotation on the subtree rooted at node x
  leftRotate(x) {
    let y = x.right;
    let T = y.left;

    y.left = x;
    x.right = T;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  // Perform right rotation on the subtree rooted at node y
  rightRotate(y) {
    let x = y.left;
    let T = x.right;

    x.right = y;
    y.left = T;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  // Get balance factor of a node
  getBalance(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Insert a new node with given data
  insert(data) {
    this.root = this.insertNode(this.root, data);
  }

  insertNode(node, data) {
    // Perform normal BST insertion
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertNode(node.right, data);
    } else {
      // Duplicate keys are not allowed
      return node;
    }

    // Update the height of this node
    this.updateHeight(node);

    // Get the balance factor of this node to check for imbalance
    let balance = this.getBalance(node);

    // Perform AVL rotations if necessary
    if (balance > 1 && data < node.left.data) {
      return this.rightRotate(node);
    }

    if (balance < -1 && data > node.right.data) {
      return this.leftRotate(node);
    }

    if (balance > 1 && data > node.left.data) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && data < node.right.data) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    // If the tree is balanced, return the node
    return node;
  }

  // In-order traversal of the AVL tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

avlTree.inOrderTraversal(avlTree.root);
