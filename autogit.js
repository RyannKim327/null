class Node {
  constructor(data, color) {
    this.data = data;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data, "red");
    this.root = this.insertNode(this.root, newNode);
    // Ensure root node is black
    this.root.color = "black";
  }

  insertNode(node, newNode) {
    // If tree is empty, return the new node
    if (node === null) {
      return newNode;
    }

    // Insert new node
    if (newNode.data < node.data) {
      node.left = this.insertNode(node.left, newNode);
      node.left.parent = node;
    } else if (newNode.data > node.data) {
      node.right = this.insertNode(node.right, newNode);
      node.right.parent = node;
    }

    // Perform rotations and color flips to maintain red-black tree properties
    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.rotateLeft(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rotateRight(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }

    return node;
  }

  isRed(node) {
    if (node === null) {
      return false;
    }
    return node.color === "red";
  }

  rotateLeft(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    temp.color = node.color;
    node.color = "red";
    return temp;
  }

  rotateRight(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    temp.color = node.color;
    node.color = "red";
    return temp;
  }

  flipColors(node) {
    node.color = "red";
    node.left.color = "black";
    node.right.color = "black";
  }
}
