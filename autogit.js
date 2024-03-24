// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node in the Binary Search Tree
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a node in the Binary Search Tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }
}

// Create a new Binary Search Tree instance
const bst = new BinarySearchTree();

// Insert nodes into the binary search tree
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

// Search for a node
const nodeToFind = 6;
const foundNode = bst.search(nodeToFind);
if (foundNode) {
  console.log(`Node with value ${nodeToFind} found in the Binary Search Tree.`);
} else {
  console.log(`Node with value ${nodeToFind} not found in the Binary Search Tree.`);
}
