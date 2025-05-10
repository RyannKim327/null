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
function sumOfNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}
const tree = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3)
);

console.log(sumOfNodes(tree)); // Output: 15
