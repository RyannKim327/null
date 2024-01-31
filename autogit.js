function getHeight(node) {
  if (node === null) return 0;   // Base case: an empty tree has height 0
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}
function getDiameter(node) {
  if (node === null) return 0;   // Base case: an empty tree has diameter 0
  
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  // Recurse to find the diameter of left and right subtrees
  const leftDiameter = getDiameter(node.left);
  const rightDiameter = getDiameter(node.right);

  // Return the maximum of three values: left subtree diameter, right subtree diameter, and lengths of left and right paths
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}
// Node constructor
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const diameter = getDiameter(root);
console.log("Diameter of the binary tree:", diameter);
