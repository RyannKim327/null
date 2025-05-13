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
function sumNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return root.val + sumNodes(root.left) + sumNodes(root.right);
}
const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(sumNodes(tree)); // Output should be 15 (1 + 2 + 4 + 5 + 3)
