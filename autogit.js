// Define a Node class for the binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function getHeight(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// Function to calculate the diameter of a binary tree
function getDiameter(node) {
  if (node === null) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  // Calculate the diameter of the left and right subtrees recursively
  const leftDiameter = getDiameter(node.left);
  const rightDiameter = getDiameter(node.right);

  // Return the maximum of the following:
  // 1. Diameter of the left subtree
  // 2. Diameter of the right subtree
  // 3. Longest path that passes through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Get the diameter of the binary tree
const diameter = getDiameter(root);
console.log("Diameter:", diameter);
Diameter: 4
