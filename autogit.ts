class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function height(node: TreeNode | null): number {
    if (!node) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update maxDiameter if this path is longer
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Height of node is max of left or right subtree height + 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return maxDiameter;
}
