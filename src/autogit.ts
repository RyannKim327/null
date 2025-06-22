// Definition of a binary tree node
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the maximum depth of a binary tree
function maxDepth(root: TreeNode | null): number {
  // Base case: if the tree is empty, return 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth of the two subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the maximum depth
const depth = maxDepth(root);
console.log("Maximum Depth:", depth); // Output: Maximum Depth: 3
