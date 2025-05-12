class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function sumTree(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const leftSum = sumTree(root.left);
  const rightSum = sumTree(root.right);
  return root.value + leftSum + rightSum;
}
