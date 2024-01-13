// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Node class representing a single node in the tree
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.color = 'red';
    }
  }

  // Insert a value into the tree
  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      node.color = 'black';
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (current) {
        parent = current;
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      // Set parent for new node
      node.parent = parent;

      // Insert new node
      if (data < parent.data) {
        parent.left = node;
      } else {
        parent.right = node;
      }

      // Fix the tree to maintain red-black properties
      this.fixInsertion(node);
    }
  }

  // Fix the tree on insertion to ensure red-black properties
  fixInsertion(node) {
    while (node.parent && node.parent.color === 'red') {
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
            this.rotateLeft(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
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
            this.rotateRight(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = 'black';
  }

  // Left rotation of the tree
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

  // Right rotation of the tree
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
}
