class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  // If the root is null, the tree has no nodes and its depth is 0
  if (!root) {
    return 0;
  }

  // Recursively calculate the maximum depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth among the left and right subtrees, plus 1 for the root node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const tree = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(maxDepth(tree)); // Output: 3
