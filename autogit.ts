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

  function depth(node: TreeNode | null): number {
    if (node === null) return 0;

    // Recursively find the height of left and right subtrees
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // Path through this node would be leftDepth + rightDepth
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Height of this node is max of left or right subtree heights + 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return diameter;
}
