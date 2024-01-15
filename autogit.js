// Node class
class Node {
  constructor(value, color = "red", left = null, right = null, parent = null) {
    this.value = value;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insertion
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) { // If the tree is empty
      this.root = newNode;
      newNode.color = "black";
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
      this.fixViolations(newNode);
    }
  }

  // Fix violations of red-black tree properties
  fixViolations(node) {
    while (
      node.parent &&
      node.parent.color === "red" &&
      node.color !== "black"
    ) {
      const parent = node.parent;
      const grandparent = parent.parent;
      if (grandparent && grandparent.left === parent) {
        const uncle = grandparent.right;
        if (uncle && uncle.color === "red") {
          parent.color = "black";
          uncle.color = "black";
          grandparent.color = "red";
          node = grandparent;
        } else {
          if (parent.right === node) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }
          parent.color = "black";
          grandparent.color = "red";
          this.rotateRight(grandparent);
        }
      } else if (grandparent && grandparent.right === parent) {
        const uncle = grandparent.left;
        if (uncle && uncle.color === "red") {
          parent.color = "black";
          uncle.color = "black";
          grandparent.color = "red";
          node = grandparent;
        } else {
          if (parent.left === node) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }
          parent.color = "black";
          grandparent.color = "red";
          this.rotateLeft(grandparent);
        }
      }
    }
    this.root.color = "black";
  }

  // Left rotation
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

  // Right rotation
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (!node.parent) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
// ... continue inserting more values

console.log(tree);
