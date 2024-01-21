function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // Update the diameter if the sum of depths is greater
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Return the depth of the subtree rooted at the current node
    return 1 + Math.max(leftDepth, rightDepth);
  }

  depth(root);

  return diameter;
}
