// Node class representing a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }
  
  // Recursively calculate the height of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  
  // Return the maximum height plus 1
  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null) {
    return 0;
  }
  
  // Calculate the height of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  
  // Calculate the diameter of the left and right subtrees
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);
  
  // Return the maximum of the following:
  // - Diameter of the left subtree
  // - Diameter of the right subtree
  // - Maximum number of nodes between any two leaf nodes passing through the root
  return Math.max(leftDiameter, rightDiameter, leftHeight + rightHeight + 1);
}
