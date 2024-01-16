class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
    
    diameter = Math.max(diameter, leftDepth + rightDepth);
    
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  depth(root);
  return diameter;
}
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log(diameterOfBinaryTree(root)); // Output: 3
