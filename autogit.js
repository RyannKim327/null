class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }
  // Implement the operations here...
}
RedBlackTree.prototype.leftRotate = function(node) {
  const rightChild = node.right;
  node.right = rightChild.left;

  if (rightChild.left !== null)
    rightChild.left.parent = node;

  rightChild.parent = node.parent;

  if (node.parent === null)
    this.root = rightChild;
  else if (node === node.parent.left)
    node.parent.left = rightChild;
  else
    node.parent.right = rightChild;

  rightChild.left = node;
  node.parent = rightChild;
}
RedBlackTree.prototype.rightRotate = function(node) {
  const leftChild = node.left;
  node.left = leftChild.right;

  if (leftChild.right !== null)
    leftChild.right.parent = node;

  leftChild.parent = node.parent;

  if (node.parent === null)
    this.root = leftChild;
  else if (node === node.parent.left)
    node.parent.left = leftChild;
  else
    node.parent.right = leftChild;

  leftChild.right = node;
  node.parent = leftChild;
}
RedBlackTree.prototype.insert = function(value) {
  const newNode = new Node(value, "red");

  let current = this.root;
  let parent = null;

  while (current !== null) {
    parent = current;

    if (value < current.value)
      current = current.left;
    else
      current = current.right;
  }

  newNode.parent = parent;

  if (parent === null)
    this.root = newNode;
  else if (value < parent.value)
    parent.left = newNode;
  else
    parent.right = newNode;

  this.fixInsert(newNode);
}
RedBlackTree.prototype.fixInsert = function(node) {
  while (node !== this.root && node.parent.color === "red") {
    if (node.parent === node.parent.parent.left) {
      const uncle = node.parent.parent.right;

      if (uncle !== null && uncle.color === "red") {
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.right) {
          node = node.parent;
          this.leftRotate(node);
        }

        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.rightRotate(node.parent.parent);
      }
    } else {
      const uncle = node.parent.parent.left;

      if (uncle !== null && uncle.color === "red") {
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.left) {
          node = node.parent;
          this.rightRotate(node);
        }

        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.leftRotate(node.parent.parent);
      }
    }
  }

  this.root.color = "black";
}
