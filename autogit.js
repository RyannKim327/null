// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "red";
  }
}

// Define the RedBlackTree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      // Case 1: If the tree is empty, insert as the root
      newNode.color = "black";
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode !== null) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            // Insert as the left child if available
            newNode.parent = currentNode;
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            // Insert as the right child if available
            newNode.parent = currentNode;
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
      // Ensure red-black tree properties are maintained
      this.insertFixUp(newNode);
    }
  }

  // Helper function to fix up the tree after insertion
  insertFixUp(node) {
    while (node.parent !== null && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === "red") {
          // Case 1: Uncle is red, recolor nodes
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Uncle is black, node is a right child
            node = node.parent;
            this.leftRotate(node);
          }
          // Case 3: Uncle is black, node is a left child
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rightRotate(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === "red") {
          // Case 1: Uncle is red, recolor nodes
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 2: Uncle is black, node is a left child
            node = node.parent;
            this.rightRotate(node);
          }
          // Case 3: Uncle is black, node is a right child
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = "black"; // Ensure root is always black
  }

  // Perform a left rotation
  leftRotate(node) {
    let rightChild = node.right;
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

  // Perform a right rotation
  rightRotate(node) {
    let leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (node.parent === null) {
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

// Usage example
const tree = new RedBlackTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
