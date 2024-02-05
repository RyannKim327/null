// Define a TreeNode class
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function getHeight(node) {
  if (node == null) {
    return 0;
  }
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// Function to calculate the diameter of a binary tree
function getDiameter(root) {
  if (root == null) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  // Calculate the diameter of the left and right subtrees recursively
  const leftDiameter = getDiameter(root.left);
  const rightDiameter = getDiameter(root.right);

  // Return the maximum of the following values:
  // 1. Diameter of the left subtree
  // 2. Diameter of the right subtree
  // 3. Length of the longest path that passes through the root (leftHeight + rightHeight)
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter
const diameter = getDiameter(root);
console.log("Diameter of the binary tree:", diameter);
