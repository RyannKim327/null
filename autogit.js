// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Node class for the tree nodes
  class Node {
    constructor(value, color) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
      // 'color' can be either 'red' or 'black'
      this.color = color;
    }
  }

  // Function to insert a value into the tree
  insert(value) {
    const newNode = new Node(value, 'red');
    if (this.root === null) {
      this.root = newNode;
      newNode.color = 'black';
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
      this.fixInsertViolation(newNode);
    }
  }

  // Function to fix insertion violations and restore the red-black tree properties
  fixInsertViolation(node) {
    while (node.parent !== null && node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle && uncle.color === 'red') {
          node.parent.color = 'black';
          uncle.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  // Function to perform a left rotation
  leftRotate(node) {
    const pivot = node.right;
    node.right = pivot.left;
    if (pivot.left !== null) {
      pivot.left.parent = node;
    }
    pivot.parent = node.parent;
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    pivot.left = node;
    node.parent = pivot;
  }

  // Function to perform a right rotation
  rightRotate(node) {
    const pivot = node.left;
    node.left = pivot.right;
    if (pivot.right !== null) {
      pivot.right.parent = node;
    }
    pivot.parent = node.parent;
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.right) {
      node.parent.right = pivot;
    } else {
      node.parent.left = pivot;
    }
    pivot.right = node;
    node.parent = pivot;
  }
}
