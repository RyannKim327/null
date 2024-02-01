class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // If the root is null, the depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth plus 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create nodes
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

// Build the binary tree
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

// Calculate the maximum depth
const depth = maxDepth(root);
console.log('Maximum depth:', depth);
     1
    / \
   2   3
  / \
 4   5
Maximum depth: 3
