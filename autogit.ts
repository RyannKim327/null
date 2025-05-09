class TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: any, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function countLeafNodes(root: TreeNode | null): number {
  if (!root) return 0;               // If node is null, no leaves here
  if (!root.left && !root.right) {  // If no children, it's a leaf
    return 1;
  }
  // Recurse on left and right subtrees and sum their leaf counts
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
