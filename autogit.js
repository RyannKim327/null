// Node constructor
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Function to count leaf nodes
function countLeafNodes(root) {
  // Base case: if the root is null, there are no leaf nodes
  if (root === null) {
    return 0;
  }
  
  // Base case: if the root has no children, it is a leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  // Recursively count the leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:

// Create a binary tree
var rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);

// Count the leaf nodes
var leafNodeCount = countLeafNodes(rootNode);
console.log("Number of leaf nodes:", leafNodeCount);
