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

  // Implement methods in the AVLTree class
}
getHeight(node) {
  if (node === null) {
    return 0;
  }
  return node.height;
}
getBalanceFactor(node) {
  if (node === null) {
    return 0;
  }
  return this.getHeight(node.left) - this.getHeight(node.right);
}
rotateRight(node) {
  const newRoot = node.left;
  const temp = newRoot.right;

  newRoot.right = node;
  node.left = temp;

  node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

  return newRoot;
}
rotateLeft(node) {
  const newRoot = node.right;
  const temp = newRoot.left;

  newRoot.left = node;
  node.right = temp;

  node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

  return newRoot;
}
insert(value) {
  this.root = this.insertNode(this.root, value);
}

insertNode(root, value) {
  if (root === null) {
    return new Node(value);
  }

  if (value < root.value) {
    root.left = this.insertNode(root.left, value);
  } else {
    root.right = this.insertNode(root.right, value);
  }

  root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;

  const balanceFactor = this.getBalanceFactor(root);

  // Left Left Case
  if (balanceFactor > 1 && value < root.left.value) {
    return this.rotateRight(root);
  }

  // Right Right Case
  if (balanceFactor < -1 && value > root.right.value) {
    return this.rotateLeft(root);
  }

  // Left Right Case
  if (balanceFactor > 1 && value > root.left.value) {
    root.left = this.rotateLeft(root.left);
    return this.rotateRight(root);
  }

  // Right Left Case
  if (balanceFactor < -1 && value < root.right.value) {
    root.right = this.rotateRight(root.right);
    return this.rotateLeft(root);
  }

  return root;
}
inorder(node) {
  if (node !== null) {
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }
}
