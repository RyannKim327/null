// Node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree definition
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Recursive function to count leaf nodes
  countLeafNodes(node) {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return 1;
    }
    return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
  }

  // Public method to count leaf nodes in the tree
  getLeafNodeCount() {
    return this.countLeafNodes(this.root);
  }
}

// Creating a binary tree
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);

// Getting the number of leaf nodes
const leafNodeCount = tree.getLeafNodeCount();
console.log("Number of leaf nodes:", leafNodeCount);
