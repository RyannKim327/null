class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has depth 0
  }

  const leftDepth = maxDepth(root.left); // Recursively compute the depth of the left subtree
  const rightDepth = maxDepth(root.right); // Recursively compute the depth of the right subtree

  return Math.max(leftDepth, rightDepth) + 1; // Return the maximum depth of the two subtrees plus 1 (for current level)
}
// Create a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Find the maximum depth
const depth = maxDepth(root);
console.log(depth); // Output: 3
