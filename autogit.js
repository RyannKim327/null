// Define the tree node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the maximum depth of the binary tree
function findMaxDepth(root) {
  if (root === null) {
    return 0; // Base case: empty tree has depth 0
  }
  
  // Recursive calls to find the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);
  
  // Return the maximum depth of the subtrees plus one for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log(findMaxDepth(root)); // Output: 3
