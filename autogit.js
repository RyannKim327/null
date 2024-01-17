class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0; // Empty tree has depth 0
  }

  // Depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth among the two subtrees, plus 1 for the current level
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Calculate the maximum depth
const depth = maxDepth(root);
console.log(depth); // Output: 3
