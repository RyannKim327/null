class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) {
    // Base case: if the node is null, return 0
    return 0;
  }

  const leftDepth = maxDepth(root.left); // Recursively calculate the depth of the left subtree
  const rightDepth = maxDepth(root.right); // Recursively calculate the depth of the right subtree

  return 1 + Math.max(leftDepth, rightDepth); // Return the maximum depth of the tree (1 + maximum of left and right depths)
}
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root)); // Output: 3
