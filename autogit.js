class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findDiameter(root) {
  let diameter = 0;

  function depth(node) {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // update the diameter if the sum of left and right nodes' depths is greater
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // return the depth of the current node
    return 1 + Math.max(leftDepth, rightDepth);
  }

  depth(root); // start the recursive traversal from the root node
  return diameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(findDiameter(root)); // Output: 5
