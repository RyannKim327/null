// Define the RedBlackTree class and its Node structure
class RedBlackTree {
  constructor() {
    this.root = null;
    this.NULL_NODE = new Node(null, null, null, null, null);
  }

  // Insert a new value into the tree
  insert(value) {
    const newNode = new Node(value, this.NULL_NODE, this.NULL_NODE, this.NULL_NODE, 'red');
    this.insertNode(newNode);

    // Ensure the root is always black
    this.root.color = 'black';
  }

  // Internal function to insert a node into the tree
  insertNode(newNode) {
    let current = this.root;
    let parent = null;

    // Find the appropriate position for the new node
    while (current !== this.NULL_NODE) {
      parent = current;
      if (newNode.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Set the parent and child references for the new node
    newNode.parent = parent;
    if (parent === null) {
      this.root = newNode;
    } else if (newNode.value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    // Ensure the red-black property is maintained after insertion
    if (newNode !== this.root) {
      this.fixInsertion(newNode);
    }
  }

  // Internal function to fix the red-black property after insertion
  fixInsertion(newNode) {
    while (newNode.parent.color === 'red') {
      if (newNode.parent === newNode.parent.parent.left) {
        let uncle = newNode.parent.parent.right;

        if (uncle.color === 'red') {
          // Case 1: Recolor
          newNode.parent.color = 'black';
          uncle.color = 'black';
          newNode.parent.parent.color = 'red';
          newNode = newNode.parent.parent;
        } else {
          if (newNode === newNode.parent.right) {
            // Case 2: Left rotation
            newNode = newNode.parent;
            this.leftRotate(newNode);
          }

          // Case 3: Right rotation
          newNode.parent.color = 'black';
          newNode.parent.parent.color = 'red';
          this.rightRotate(newNode.parent.parent);
        }
      } else {
        let uncle = newNode.parent.parent.left;

        if (uncle.color === 'red') {
          // Case 1: Recolor
          newNode.parent.color = 'black';
          uncle.color = 'black';
          newNode.parent.parent.color = 'red';
          newNode = newNode.parent.parent;
        } else {
          if (newNode === newNode.parent.left) {
            // Case 2: Right rotation
            newNode = newNode.parent;
            this.rightRotate(newNode);
          }

          // Case 3: Left rotation
          newNode.parent.color = 'black';
          newNode.parent.parent.color = 'red';
          this.leftRotate(newNode.parent.parent);
        }
      }
    }

    this.root.color = 'black';
  }

  // Left rotation
  leftRotate(node) {
    const rightChild = node.right;

    node.right = rightChild.left;
    if (rightChild.left !== this.NULL_NODE) {
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
  }

  // Right rotation
  rightRotate(node) {
    const leftChild = node.left;

    node.left = leftChild.right;
    if (leftChild.right !== this.NULL_NODE) {
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
  }
}

// Define the structure of a node
class Node {
  constructor(value, left, right, parent, color) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.color = color;
  }
}
