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
function sumTree(node: TreeNode | null): number {
  if (node === null) return 0;
  return node.val + sumTree(node.left) + sumTree(node.right);
}
