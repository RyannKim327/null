class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // Base case: If the root is null, the depth is 0.
  if (root === null) {
    return 0;
  }

  // Recursively calculate the maximum depth of the left and right subtrees.
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth among the left and right subtrees, plus 1 for the current node.
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

// Calculate the maximum depth
const depth = maxDepth(root);
console.log(depth); // Output: 3
