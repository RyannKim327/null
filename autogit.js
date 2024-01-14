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
}
RedBlackTree.prototype.insert = function (value) {
  const newNode = new Node(value, "red");

  if (!this.root) {
    newNode.color = "black";
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
    this.fixViolation(newNode);
  }
};

RedBlackTree.prototype.insertNode = function (node, newNode) {
  if (newNode.value < node.value) {
    if (node.left === null) {
      node.left = newNode;
      newNode.parent = node;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
      newNode.parent = node;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
};

RedBlackTree.prototype.fixViolation = function (node) {
  while (
    node !== this.root &&
    node.parent.color === "red" &&
    node.color !== "black"
  ) {
    const parent = node.parent;
    const grandparent = node.parent.parent;

    if (parent === grandparent.left) {
      const uncle = grandparent.right;

      if (uncle !== null && uncle.color === "red") {
        // Case 1: Uncle is red
        grandparent.color = "red";
        parent.color = "black";
        uncle.color = "black";
        node = grandparent;
      } else {
        if (node === parent.right) {
          // Case 2: Uncle is black and node is a right child
          this.rotateLeft(parent);
          node = parent;
          parent = node.parent;
        }

        // Case 3: Uncle is black and node is a left child
        this.rotateRight(grandparent);
        const temp = parent.color;
        parent.color = grandparent.color;
        grandparent.color = temp;
        node = parent;
      }
    } else {
      const uncle = grandparent.left;

      if (uncle !== null && uncle.color === "red") {
        // Case 1: Uncle is red
        grandparent.color = "red";
        parent.color = "black";
        uncle.color = "black";
        node = grandparent;
      } else {
        if (node === parent.left) {
          // Case 2: Uncle is black and node is a left child
          this.rotateRight(parent);
          node = parent;
          parent = node.parent;
        }

        // Case 3: Uncle is black and node is a right child
        this.rotateLeft(grandparent);
        const temp = parent.color;
        parent.color = grandparent.color;
        grandparent.color = temp;
        node = parent;
      }
    }
  }

  this.root.color = "black";
};

RedBlackTree.prototype.rotateLeft = function (node) {
  const rightChild = node.right;
  node.right = rightChild.left;
  if (rightChild.left !== null) {
    rightChild.left.parent = node;
  }

  rightChild.parent = node.parent;
  if (node.parent === null) {
    this.root = rightChild;
  } else if (node === node.parent.left) {
    node.parent.left = rightChild;
  } else {
    node.parent.right = rightChild;
  }

  rightChild.left = node;
  node.parent = rightChild;
};

RedBlackTree.prototype.rotateRight = function (node) {
  const leftChild = node.left;
  node.left = leftChild.right;
  if (leftChild.right !== null) {
    leftChild.right.parent = node;
  }

  leftChild.parent = node.parent;
  if (node.parent === null) {
    this.root = leftChild;
  } else if (node === node.parent.right) {
    node.parent.right = leftChild;
  } else {
    node.parent.left = leftChild;
  }

  leftChild.right = node;
  node.parent = leftChild;
};
const tree = new RedBlackTree();
tree.insert(7);
tree.insert(3);
tree.insert(18);
tree.insert(10);
tree.insert(22);
tree.insert(8);
tree.insert(11);

console.log(tree.root);
