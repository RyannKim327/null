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

  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  insert(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.insert(node.left, data);
    } else if (data > node.data) {
      node.right = this.insert(node.right, data);
    } else {
      return node;
    }

    this.updateHeight(node);

    let balance = this.getBalanceFactor(node);

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

    return node;
  }

  insertNode(data) {
    this.root = this.insert(this.root, data);
  }

  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.data);
      this.inorderTraversal(node.right);
    }
  }

  printInorder() {
    this.inorderTraversal(this.root);
  }
}

// Usage
let avl = new AVLTree();
avl.insertNode(10);
avl.insertNode(20);
avl.insertNode(30);
avl.insertNode(40);
avl.insertNode(50);
avl.insertNode(25);

avl.printInorder();
