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
function countLeafNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  if (root.left === null && root.right === null) {
    return 1;
  }

  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
