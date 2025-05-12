class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function height(node: TreeNode | null): number {
    if (!node) return 0;
    
    // Recursively find the height of left and right subtrees
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    // Update diameter if path through this node is longer
    diameter = Math.max(diameter, leftHeight + rightHeight);
    
    // Height of this node is max of left/right subtree heights plus 1 for this node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return diameter;
}
