// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree Class
class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // Recursive helper function to count leaf nodes
  countLeafNodes(node) {
    if (node === null)
      return 0;
    
    // If the current node is a leaf node, return 1
    if (node.left === null && node.right === null)
      return 1;
    
    // Recursively count the leaf nodes in the left and right subtrees
    return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
  }
  
  // Function to find the number of leaf nodes in the binary tree
  getLeafNodeCount() {
    return this.countLeafNodes(this.root);
  }
}

// Example usage:

// Create the binary tree
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);

// Find the number of leaf nodes
const leafNodeCount = tree.getLeafNodeCount();
console.log("Number of leaf nodes:", leafNodeCount);
