class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findMaxDepth(root) {
  if (!root) {
    return 0; // Base case: empty tree has depth 0
  }

  const leftDepth = findMaxDepth(root.left); // Recursively calculate left subtree depth
  const rightDepth = findMaxDepth(root.right); // Recursively calculate right subtree depth

  return Math.max(leftDepth, rightDepth) + 1; // Return the maximum depth of subtrees and add 1 for the current node
}
// Build a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Find maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth:", maxDepth);
     1
   /   \
  2     3
 / \
4   5
