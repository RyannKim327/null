// Node structure for the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function getHeight(node) {
  if (node == null) return 0;
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// Function to calculate the diameter of a binary tree
function getDiameter(node) {
  if (node == null) return 0;

  // Get the heights of the left and right subtrees
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  // Get the diameters of the left and right subtrees recursively
  const leftDiameter = getDiameter(node.left);
  const rightDiameter = getDiameter(node.right);

  // Return the maximum of:
  // 1. Diameter of the current node's subtree (through the root)
  // 2. Diameter of the left subtree
  // 3. Diameter of the right subtree
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}
// Create the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the diameter
const diameter = getDiameter(root);
console.log("Diameter of the binary tree:", diameter);
Diameter of the binary tree: 4
