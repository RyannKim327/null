class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  // Helper function to calculate the depth of the tree
  function getTreeDepth(node) {
    if (node === null) return 0;

    const leftDepth = getTreeDepth(node.left);
    const rightDepth = getTreeDepth(node.right);

    // Update the diameter if the sum of left and right depths is greater
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Return the depth of the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }

  getTreeDepth(root);
  return diameter;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
