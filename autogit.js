// Define the TreeNode class to represent a node in the binary tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a tree
function treeHeight(root) {
  if (root === null) {
    return 0;
  } else {
    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Function to calculate the diameter of a tree
function treeDiameter(root) {
  if (root === null) {
    return 0;
  } else {
    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);

    const leftDiameter = treeDiameter(root.left);
    const rightDiameter = treeDiameter(root.right);

    // The diameter can be either:
    // - Passing through the root (leftHeight + rightHeight)
    // - Completely contained in the left subtree (leftDiameter)
    // - Completely contained in the right subtree (rightDiameter)
    return Math.max(leftHeight + rightHeight, leftDiameter, rightDiameter);
  }
}

// Example usage:

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Calculate the diameter of the tree
const diameter = treeDiameter(root);

console.log("Diameter:", diameter);
