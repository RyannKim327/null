// Node class representing a single node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinaryTree class representing the overall binary tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a value recursively
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Traverse the binary tree in in-order (left-root-right) order
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method for in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(8);
tree.insert(4);
tree.insert(12);
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(14);

// In-order traversal callback function
const printValue = (value) => {
  console.log(value);
};

// Perform in-order traversal
tree.inOrderTraversal(printValue);
