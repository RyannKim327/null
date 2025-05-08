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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  // Helper function to compute height of tree and update diameter
  function height(node: TreeNode | null): number {
    if (!node) return -1; // height of an empty node is -1 to ensure edges counted correctly

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    // Diameter at this node = edges in the longest path through this node
    let diameterAtNode = leftHeight + rightHeight + 2;

    maxDiameter = Math.max(maxDiameter, diameterAtNode);

    // Height of this node is max height of children plus 1 edge
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return maxDiameter;
}
