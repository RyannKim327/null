class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (node === null) return 0;

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // update the diameter if the current path is longer
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // return the depth of the subtree rooted at this node
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return diameter;
}
