class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has a depth of 0
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(
    20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(maxDepth(tree)); // Output: 3
