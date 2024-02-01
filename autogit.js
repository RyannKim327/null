// Define the tree node structure
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to find the maximum depth of a binary tree
function maxDepth(root) {
  if (!root) {
    // If the root is null, the tree has no depth
    return 0;
  } else {
    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(maxDepth(tree)); // Output: 3
