// Define the binary tree node structure
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count the leaf nodes in a binary tree
function countLeafNodes(root) {
  if (!root) {
    return 0; // Base case: empty tree has 0 leaf nodes
  } else if (!root.left && !root.right) {
    return 1; // Base case: leaf node found
  } else {
    // Recursively count leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage:

// Create a binary tree
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);
root.right.left = new BinaryTreeNode(6);
root.right.right = new BinaryTreeNode(7);
root.right.right.left = new BinaryTreeNode(8);

// Count the leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount); // Output: Number of leaf nodes: 4
