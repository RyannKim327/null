class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // calculate the diameter passing through the current node
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // return the depth of the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return diameter;
}

// Usage example:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(tree)); // Output: 3
