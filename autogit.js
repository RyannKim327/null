// Define the structure of a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }
  
  return 1 + Math.max(height(node.left), height(node.right));
}

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  
  // Calculate the height of the left and right subtrees
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  
  // Calculate the diameter passing through the root node
  let diameterRoot = leftHeight + rightHeight;
  
  // Calculate the diameter of the left and right subtrees recursively
  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);
  
  // Return the maximum of the three diameters
  return Math.max(diameterRoot, Math.max(leftDiameter, rightDiameter));
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output the diameter of the binary tree
