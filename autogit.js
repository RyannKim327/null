// Class to represent a node in the red-black tree
class Node {
  constructor(value, color) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Class to represent the red-black tree
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Helper function to perform left rotation of a node
  rotateLeft(node) {
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

  // Helper function to perform right rotation of a node
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null)
      leftChild.right.parent = node;

    leftChild.parent = node.parent;

    if (node.parent === null)
      this.root = leftChild;
    else if (node === node.parent.right)
      node.parent.right = leftChild;
    else
      node.parent.left = leftChild;

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Helper function to fix any violations after inserting a node
  fixInsert(node) {
    while (node !== this.root && node.color === "red" && node.parent.color === "red") {
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
            this.rotateLeft(node);
          }
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
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

  // Public method to insert a value into the red-black tree
  insert(value) {
    const node = new Node(value, "red");
    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;
      if (value < current.value)
        current = current.left;
      else
        current = current.right;
    }

    node.parent = parent;

    if (parent === null)
      this.root = node;
    else if (value < parent.value)
      parent.left = node;
    else
      parent.right = node;

    this.fixInsert(node);
  }

  // Public method to print the red-black tree in preorder traversal
  printPreorder(node = this.root) {
    if (node === null) return;

    console.log(node.value, node.color);
    this.printPreorder(node.left);
    this.printPreorder(node.right);
  }
}

// Example usage:
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);

tree.printPreorder();
