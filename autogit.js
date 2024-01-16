// Define the TreeNode class for binary tree nodes
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Helper function to calculate the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }
  return Math.max(height(node.left), height(node.right)) + 1;
}

// Main function to calculate the diameter of a binary tree
function diameter(root) {
  if (root === null) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Calculate the diameter recursively for the left and right subtrees
  const leftDiameter = diameter(root.left);
  const rightDiameter = diameter(root.right);

  // Return the maximum of the three values
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Find the diameter of the binary tree
const treeDiameter = diameter(root);
console.log("Diameter of the binary tree:", treeDiameter);
Diameter of the binary tree: 4
