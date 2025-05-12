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

  function height(node: TreeNode | null): number {
    if (node === null) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // diameter at this node will be sum of left and right heights
    const diameter = leftHeight + rightHeight;
    maxDiameter = Math.max(maxDiameter, diameter);

    // return height of tree rooted at this node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return maxDiameter;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
