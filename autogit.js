class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* Helper function to calculate the height of a binary tree */
function height(node) {
  if (node == null)
    return 0;
  
  return 1 + Math.max(height(node.left), height(node.right));
}

/* Function to find the diameter of a binary tree */
function diameterOfBinaryTree(root) {
  if (root == null)
    return 0;
  
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  
  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);
  
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

// Usage example:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
