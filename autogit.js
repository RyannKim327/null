class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function getDepth(node) {
    if (node === null) {
      return 0;
    }
  
    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);
  
    // Calculate the diameter passing through the current node
    diameter = Math.max(diameter, leftDepth + rightDepth);
  
    // Return the depth of the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  getDepth(root);
  
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

console.log(diameterOfBinaryTree(root)); // Output: 5
