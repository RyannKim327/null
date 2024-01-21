class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  // Calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth + 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(5);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Find the maximum depth of the tree
const depth = maxDepth(root);
console.log(depth); // Output: 3
