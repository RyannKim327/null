// Node class
class Node {
  constructor(data, color) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a node
  insert(data) {
    const newNode = new Node(data, "red");
    if (this.root === null) {
      this.root = newNode;
      newNode.color = "black";
    } else {
      let current = this.root;
      let parent = null;
      while (current !== null) {
        parent = current;
        if (newNode.data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      newNode.parent = parent;
      if (newNode.data < parent.data) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
      this.fixRedRedViolation(newNode);
    }
  }

  // Fix Red-Red violation during insertion
  fixRedRedViolation(node) {
    while (node !== this.root && node.parent.color === "red") {
      const parent = node.parent;
      const grandparent = parent.parent;
      const uncle = grandparent.left === parent ? grandparent.right : grandparent.left;

      if (uncle && uncle.color === "red") {
        grandparent.color = "red";
        parent.color = "black";
        uncle.color = "black";
        node = grandparent;
      } else {
        if (node.parent === grandparent.left) {
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotateRight(grandparent);
        } else {
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotateLeft(grandparent);
        }
        parent.color = "black";
        grandparent.color = "red";
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
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }

  // Traverse the tree in-order
  inOrderTraversal() {
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(node) {
    if (node !== null) {
      this._inOrderTraversal(node.left);
      console.log(node.data);
      this._inOrderTraversal(node.right);
    }
  }
}

// Example usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.inOrderTraversal();
