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
}
getHeight(node) {
  if (node === null)
    return 0;
  return node.height;
}
getBalanceFactor(node) {
  if (node === null)
    return 0;
  return this.getHeight(node.left) - this.getHeight(node.right);
}
updateHeight(node) {
  node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
}
rotateLeft(node) {
  const newRoot = node.right;
  node.right = newRoot.left;
  newRoot.left = node;

  this.updateHeight(node);
  this.updateHeight(newRoot);

  return newRoot;
}
rotateRight(node) {
  const newRoot = node.left;
  node.left = newRoot.right;
  newRoot.right = node;

  this.updateHeight(node);
  this.updateHeight(newRoot);

  return newRoot;
}
balanceNode(node) {
  this.updateHeight(node);

  if (this.getBalanceFactor(node) === 2) {
    if (this.getBalanceFactor(node.left) === -1)
      node.left = this.rotateLeft(node.left);
    return this.rotateRight(node);
  }
  if (this.getBalanceFactor(node) === -2) {
    if (this.getBalanceFactor(node.right) === 1)
      node.right = this.rotateRight(node.right);
    return this.rotateLeft(node);
  }
  return node;
}
insert(key) {
  this.root = this.insertNode(this.root, key);
}

insertNode(node, key) {
  if (node === null)
    return new Node(key);
  if (key < node.key)
    node.left = this.insertNode(node.left, key);
  else if (key > node.key)
    node.right = this.insertNode(node.right, key);
  else
    return node;

  return this.balanceNode(node);
}
const avlTree = new AVLTree();
avlTree.insert(5);
avlTree.insert(10);
avlTree.insert(15);
avlTree.insert(20);

console.log(avlTree.root.key);  // Output: 10
console.log(avlTree.root.left.key);  // Output: 5
console.log(avlTree.root.right.key);  // Output: 15
console.log(avlTree.root.right.right.key);  // Output: 20
