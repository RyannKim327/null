class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function height(node) {
  if (node === null) return 0;
  
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  
  return Math.max(leftHeight, rightHeight) + 1;
}
function diameterOfBinaryTree(root) {
  if (root === null) return 0;
  
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);
  
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}
// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter
const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree:", diameter);
