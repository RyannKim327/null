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
  if (root === null) {
    return 0; // empty tree has no leaves
  }

  // if both left and right are null, this is a leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }

  // recursively count in left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
