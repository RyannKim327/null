// Node class representing a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinaryTree class representing the binary tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a new value into the binary tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node recursively
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

  // Method to check if the binary tree is empty
  isEmpty() {
    return this.root === null;
  }

  // Method to perform an in-order traversal of the binary tree
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method to perform in-order traversal recursively
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }

  // Method to perform a pre-order traversal of the binary tree
  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  // Helper method to perform pre-order traversal recursively
  preOrderTraversalNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  // Method to perform a post-order traversal of the binary tree
  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  // Helper method to perform post-order traversal recursively
  postOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }
}
// Create a new instance of BinaryTree
const tree = new BinaryTree();

// Insert values into the binary tree
tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

// Perform in-order traversal
tree.inOrderTraversal(value => console.log(value)); // Output: 20, 30, 40, 50, 60, 70, 80

// Perform pre-order traversal
tree.preOrderTraversal(value => console.log(value)); // Output: 50, 30, 20, 40, 70, 60, 80

// Perform post-order traversal
tree.postOrderTraversal(value => console.log(value)); // Output: 20, 40, 30, 60, 80, 70, 50
