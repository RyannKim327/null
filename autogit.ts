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
function countLeafNodes(node: TreeNode | null): number {
  if (node === null) {
    return 0; // no node here
  }

  if (node.left === null && node.right === null) {
    return 1; // this node is a leaf
  }

  // recurse down left and right subtrees
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}
