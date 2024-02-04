// Define a TreeNode class
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes
function findSum(root) {
  if (!root) {
    return 0;
  } else {
    // Calculate the sum recursively
    return root.val + findSum(root.left) + findSum(root.right);
  }
}

// Example usage:

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Calculate the sum of all nodes
const sum = findSum(root);
console.log("Sum of all nodes:", sum); // Output: Sum of all nodes: 28
