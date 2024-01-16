// Define a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    return 0; // Base case: empty tree has no leaf nodes
  }
  
  if (root.left === null && root.right === null) {
    return 1; // Base case: leaf node has one leaf node
  }
  
  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);
  
  return leftCount + rightCount;
}

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(8);

// Test the function
console.log("Number of leaf nodes:", countLeafNodes(root));
