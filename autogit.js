// Define the structure for a tree node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the diameter of a binary tree
function diameterOfBinaryTree(root) {
  let diameter = 0;

  // Helper function to calculate the height of a node
  function height(node) {
    if (node === null) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update the diameter if the sum of left and right heights is larger
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the maximum height between left and right subtree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return diameter;
}

// Usage example:

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter
const treeDiameter = diameterOfBinaryTree(root);
console.log(treeDiameter); // Output: 3
