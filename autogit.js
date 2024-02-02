class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Find maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth:", maxDepth);
