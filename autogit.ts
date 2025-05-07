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

  // If leaf node (no children)
  if (root.left === null && root.right === null) return 1;

  // Recursively count leaf nodes in left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
const tree = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(countLeafNodes(tree)); // Output should be 3 (nodes 4, 5, 3)
