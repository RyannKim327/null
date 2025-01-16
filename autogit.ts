interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function depth(node: TreeNode | null): number {
    if (!node) return 0;
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
    diameter = Math.max(diameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return diameter;
}
const tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(diameterOfBinaryTree(tree)); // Output: 5
