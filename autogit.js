class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0;  // If the root is null, the depth is 0
  } else {
    const leftDepth = maxDepth(root.left);   // Get the maximum depth of the left subtree
    const rightDepth = maxDepth(root.right); // Get the maximum depth of the right subtree

    return Math.max(leftDepth, rightDepth) + 1; // Return the maximum depth + 1 for the current node
  }
}
