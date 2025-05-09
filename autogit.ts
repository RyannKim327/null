// Define a binary tree node interface
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function countLeafNodes(root: TreeNode | null): number {
  if (!root) return 0; // empty tree has no leaves
  if (!root.left && !root.right) return 1; // this node is a leaf
  // sum leaf counts from left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
