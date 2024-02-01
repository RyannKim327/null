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
}
calculateHeight(node) {
  if (node === null) return 0;
  return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
}
getBalanceFactor(node) {
  if (node === null) return 0;
  return this.getHeight(node.left) - this.getHeight(node.right);
}
leftRotate(z) {
  const y = z.right;
  const T2 = y.left;

  y.left = z;
  z.right = T2;

  z.height = this.calculateHeight(z);
  y.height = this.calculateHeight(y);

  return y;
}
rightRotate(z) {
  const y = z.left;
  const T3 = y.right;

  y.right = z;
  z.left = T3;

  z.height = this.calculateHeight(z);
  y.height = this.calculateHeight(y);

  return y;
}
insert(value) {
  this.root = this.insertNode(this.root, value);
}

insertNode(node, value) {
  if (node === null) {
    return new AVLNode(value);
  }

  if (value < node.value) {
    node.left = this.insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this.insertNode(node.right, value);
  } else {
    // Duplicate values are not allowed in AVL tree
    return node;
  }

  node.height = this.calculateHeight(node);

  const balanceFactor = this.getBalanceFactor(node);

  if (balanceFactor > 1) {
    // Left subtree is heavier
    if (value < node.left.value) {
      // Left-Left case
      return this.rightRotate(node);
    } else if (value > node.left.value) {
      // Left-Right case
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }
  } else if (balanceFactor < -1) {
    // Right subtree is heavier
    if (value > node.right.value) {
      // Right-Right case
      return this.leftRotate(node);
    } else if (value < node.right.value) {
      // Right-Left case
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
  }

  return node;
}
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
console.log(avlTree.root); // Check the root node
