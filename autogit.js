// Node class to represent the nodes in the binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// BinaryTree class to represent the binary tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a new node in the binary tree
  insert(data) {
    const newNode = new Node(data);

    // If the tree is empty, set the new node as the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a new node in the binary tree
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
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

  // Method to perform an in-order traversal of the binary tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }
}

// Creating an instance of the BinaryTree class
const binaryTree = new BinaryTree();

// Inserting nodes into the binary tree
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

// Performing an in-order traversal of the binary tree
binaryTree.inOrderTraversal(binaryTree.root);
