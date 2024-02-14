class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'red'; // All new nodes are initially colored red
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }
}
RedBlackTree.prototype.insert = function (value) {
  const newNode = new Node(value);

  // Case 1: If the tree is empty, set the new node as the root and color it black
  if (this.root === null) {
    this.root = newNode;
    newNode.color = 'black';
    return;
  }

  // Helper function to insert the node into the correct position
  const insertNode = (node, newNode) => {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // Insert the node recursively
  insertNode(this.root, newNode);

  // Perform tree rotations and recoloring if necessary to maintain red-black tree properties
  this.fixTree(newNode);
};
RedBlackTree.prototype.fixTree = function (node) {
  while (node.parent !== null && node.parent.color === 'red') {
    const parentNode = node.parent;
    const grandparentNode = parentNode.parent;

    // Case 1: Parent is the left child of the grandparent
    if (parentNode === grandparentNode.left) {
      const uncleNode = grandparentNode.right;

      // Case 1.1: Uncle is red - Recoloring
      if (uncleNode !== null && uncleNode.color === 'red') {
        parentNode.color = 'black';
        uncleNode.color = 'black';
        grandparentNode.color = 'red';
        node = grandparentNode; // Move up the tree
      } else {
        // Case 1.2: Uncle is black or null
        if (node === parentNode.right) {
          // Inner left rotation
          this.rotateLeft(parentNode);
          node = parentNode;
          parentNode = node.parent;
        }

        // Case 1.3: Uncle is black or null
        // Recoloring and outer right rotation
        parentNode.color = 'black';
        grandparentNode.color = 'red';
        this.rotateRight(grandparentNode);
      }
    } else {
      // Case 2: Parent is the right child of the grandparent
      const uncleNode = grandparentNode.left;

      // Case 2.1: Uncle is red - Recoloring
      if (uncleNode !== null && uncleNode.color === 'red') {
        parentNode.color = 'black';
        uncleNode.color = 'black';
        grandparentNode.color = 'red';
        node = grandparentNode; // Move up the tree
      } else {
        // Case 2.2: Uncle is black or null
        if (node === parentNode.left) {
          // Inner right rotation
          this.rotateRight(parentNode);
          node = parentNode;
          parentNode = node.parent;
        }

        // Case 2.3: Uncle is black or null
        // Recoloring and outer left rotation
        parentNode.color = 'black';
        grandparentNode.color = 'red';
        this.rotateLeft(grandparentNode);
      }
    }
  }

  // Root should always be black
  this.root.color = 'black';
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
