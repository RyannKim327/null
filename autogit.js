class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findMaxDepth(root) {
  // Base case: if the root is null, return 0
  if (!root) {
    return 0;
  }
  
  // Recursively calculate the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);
  
  // Return the maximum depth between the left and right subtrees plus 1 (for the current level)
  return Math.max(leftDepth, rightDepth) + 1;
}

// Usage example:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

console.log(findMaxDepth(tree));  // Output: 3
