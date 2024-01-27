class Node {
  constructor(value, color) {
    this.value = value;
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

  // Rest of the methods will be implemented here
}
insert(value) {
  const newNode = new Node(value, "red");

  if (!this.root) {
    this.root = newNode;
  } else {
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          break;
        }
      }
    }
    this.fixTreeAfterInsert(newNode);
  }

  newNode.color = "black";  // Root node must be black
}
fixTreeAfterInsert(node) {
  while (node.parent && node.parent.color === "red") {
    if (node.parent === node.parent.parent.left) {
      const uncle = node.parent.parent.right;
      if (uncle && uncle.color === "red") {
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.right) {
          node = node.parent;
          this.rotateLeft(node);
        }
        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.rotateRight(node.parent.parent);
      }
    } else {
      const uncle = node.parent.parent.left;
      if (uncle && uncle.color === "red") {
        node.parent.color = "black";
        uncle.color = "black";
        node.parent.parent.color = "red";
        node = node.parent.parent;
      } else {
        if (node === node.parent.left) {
          node = node.parent;
          this.rotateRight(node);
        }
        node.parent.color = "black";
        node.parent.parent.color = "red";
        this.rotateLeft(node.parent.parent);
      }
    }
  }

  this.root.color = "black";
}
rotateLeft(node) {
  const rightChild = node.right;
  node.right = rightChild.left;

  if (rightChild.left) {
    rightChild.left.parent = node;
  }
  rightChild.parent = node.parent;

  if (!node.parent) {
    this.root = rightChild;
  } else if (node === node.parent.left) {
    node.parent.left = rightChild;
  } else {
    node.parent.right = rightChild;
  }

  rightChild.left = node;
  node.parent = rightChild;
}

rotateRight(node) {
  const leftChild = node.left;
  node.left = leftChild.right;

  if (leftChild.right) {
    leftChild.right.parent = node;
  }
  leftChild.parent = node.parent;

  if (!node.parent) {
    this.root = leftChild;
  } else if (node === node.parent.left) {
    node.parent.left = leftChild;
  } else {
    node.parent.right = leftChild;
  }

  leftChild.right = node;
  node.parent = leftChild;
}
