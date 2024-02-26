class Node {
  constructor(value, color) {
    this.value = value;
    this.color = color; // 0 -> black, 1 -> red
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Helper function to perform a left rotation
  rotateLeft(node) {
    let rightChild = node.right;
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

  // Helper function to perform a right rotation
  rotateRight(node) {
    let leftChild = node.left;
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

  // Helper function to fix violations after an insertion
  fixInsertViolation(node) {
    while (node !== this.root && node.parent.color === 1) {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle && uncle.color === 1) {
          node.parent.color = 0;
          uncle.color = 0;
          node.parent.parent.color = 1;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = 0;
          node.parent.parent.color = 1;
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle && uncle.color === 1) {
          node.parent.color = 0;
          uncle.color = 0;
          node.parent.parent.color = 1;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = 0;
          node.parent.parent.color = 1;
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 0;
  }

  // Public method to insert a value into the red-black tree
  insert(value) {
    let newNode = new Node(value, 1); // New node is always red
    let parent = null;
    let current = this.root;

    while (current) {
      parent = current;
      if (newNode.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;
    if (!parent) {
      this.root = newNode;
    } else if (newNode.value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.fixInsertViolation(newNode);
  }
}

// Usage
let tree = new RedBlackTree();
tree.insert(7);
tree.insert(3);
tree.insert(18);
tree.insert(10);
tree.insert(22);
