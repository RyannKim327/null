// Binary Tree Node Definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function to calculate tree height
function getHeight(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// Main function to calculate the diameter of binary tree
function getDiameter(root) {
  if (root === null) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  // Calculate the diameter recursively
  const leftDiameter = getDiameter(root.left);
  const rightDiameter = getDiameter(root.right);

  // Return the maximum diameter
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.left = new Node(9);

// Calculate the diameter of the binary tree
const diameter = getDiameter(root);
console.log("Diameter of the binary tree is: " + diameter);
