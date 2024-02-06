// Define a class for the nodes of the binary search tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define a class for the binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary search tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Internal method to insert a node recursively
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

  // Inorder traversal of the binary search tree
  inorder() {
    this.inorderHelper(this.root);
  }

  // Internal method for inorder traversal recursively
  inorderHelper(node) {
    if (node !== null) {
      this.inorderHelper(node.left);
      console.log(node.value);
      this.inorderHelper(node.right);
    }
  }

  /*
    Other methods such as search, delete, etc. can
    also be implemented based on your requirements
  */
}

// Usage:
const tree = new BinarySearchTree();

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

tree.inorder(); // Output: 20, 30, 40, 50, 60, 70, 80
