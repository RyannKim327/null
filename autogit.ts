// Define the TreeNode interface
interface TreeNode {
  val: any; // or specific type
  left: TreeNode | null;
  right: TreeNode | null;
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0; // Base case: empty tree
  }
  
  // Recursively find the max depth of left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  // The max depth at current node is 1 plus the larger of the two subtree depths
  return Math.max(leftDepth, rightDepth) + 1;
}
