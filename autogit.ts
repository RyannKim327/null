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

function sumOfNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}
