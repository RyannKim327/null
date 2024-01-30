// Define a Node class representing a red-black tree node
class Node {
  constructor(key, color) {
    this.key = key; // The value stored in the node
    this.color = color; // The color of the node (either "red" or "black")
    this.left = null; // Reference to the left child
    this.right = null; // Reference to the right child
    this.parent = null; // Reference to the parent node
  }
}

// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null; // Reference to the root of the red-black tree
  }

  // Insert a new key into the red-black tree
  insert(key) {
    const newNode = new Node(key, "red"); // New nodes are always red
    if (!this.root) {
      // If the tree is empty, make the new node the root
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
    this._fixInsertViolation(newNode);
  }

  // Internal method to recursively insert a node into the tree
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // If the new node's key is less than the current node's key, go left
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      // Otherwise, go right
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Internal method to fix any violations caused by node insertion
  _fixInsertViolation(node) {
    while (node.parent && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Uncle is black and node is a right child
            node = node.parent;
            this._rotateLeft(node);
          }
          // Case 3: Uncle is black and node is a left child
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this._rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 2: Uncle is black and node is a left child
            node = node.parent;
            this._rotateRight(node);
          }
          // Case 3: Uncle is black and node is a right child
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this._rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = "black"; // Root must always be black
  }

  // Left rotate the subtree rooted at the given node
  _rotateLeft(node) {
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
  }

  // Right rotate the subtree rooted at the given node
  _rotateRight(node) {
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
  }
}
const rbTree = new RedBlackTree();
rbTree.insert(42);
rbTree.insert(10);
rbTree.insert(20);
// Continue inserting more keys as needed
