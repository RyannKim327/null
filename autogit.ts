class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0; // no tree means depth is 0
  }

  // Recursively get depth of left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Max depth is the larger one plus the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
