// Define a TreeNode class to represent a node in the binary tree
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the height of a binary tree
function height(node) {
  if (node === null)
    return 0;
    
  // Recursively calculate the height of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  
  // Return the maximum height plus 1 for the current node
  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null)
    return 0;
  
  // Calculate the height of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  
  // Calculate the diameter passing through the current node
  const currentDiameter = leftHeight + rightHeight;
  
  // Recursively calculate the diameters of the left and right subtrees
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);
  
  // Return the maximum of the three diameters
  return Math.max(currentDiameter, leftDiameter, rightDiameter);
}

// Example usage

// Create a binary tree
const rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

// Calculate the diameter of the binary tree
const treeDiameter = diameter(rootNode);

console.log("Diameter:", treeDiameter);
