class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getMaxDepth(root) {
  // Base case: if the root node is null, the depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively get the maximum depth of the left and right subtrees
  const leftDepth = getMaxDepth(root.left);
  const rightDepth = getMaxDepth(root.right);

  // Return the maximum depth from the current node, adding 1 to account for the current level
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(getMaxDepth(root)); // Output: 3
