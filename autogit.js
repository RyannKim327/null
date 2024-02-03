// Node class represents a single node in the red-black tree
class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color; // 'red' or 'black'
  }
}

// RedBlackTree class represents the red-black tree structure
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value, 'red');
    if (!this.root) {
      this.root = newNode;
    } else {
      let parent = null;
      let current = this.root;

      while (current) {
        parent = current;

        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      newNode.parent = parent;

      if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }

      this.fixInsertViolation(newNode);
    }
  }

  // Fix any red-black tree violations after an insertion
  fixInsertViolation(node) {
    while (node.parent && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;

        // Case 1: Uncle is red
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          // Case 2: Uncle is black and node is a right child
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }

          // Case 3: Uncle is black and node is a left child
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rightRotate(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;

        // Case 1: Uncle is red
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          // Case 2: Uncle is black and node is a left child
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }

          // Case 3: Uncle is black and node is a right child
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.leftRotate(node.parent.parent);
        }
      }
    }

    this.root.color = 'black';
  }

  // Left rotation of nodes for fixing violations
  leftRotate(node) {
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

  // Right rotation of nodes for fixing violations
  rightRotate(node) {
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
}
const myTree = new RedBlackTree();
myTree.insert(10);
myTree.insert(20);
myTree.insert(5);
// ... continue inserting nodes

console.log(myTree.root); // Example access to the root node
