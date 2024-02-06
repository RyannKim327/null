class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  // Base case: if the root is null, return 0
  if (root === null) {
    return 0;
  }

  // Recursive case: calculate the depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  // Return the maximum depth of the left and right subtrees plus 1 (to account for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Find the maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth:", maxDepth);
