// Define a class for the binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function getHeight(node) {
  if (node === null) {
    return 0;
  }
  
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to calculate the diameter of the binary tree
function getDiameter(node) {
  if (node === null) {
    return 0;
  }

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  const leftDiameter = getDiameter(node.left);
  const rightDiameter = getDiameter(node.right);

  // Calculate the diameter passing through the current node
  const diameterThroughCurrent = leftHeight + rightHeight;

  // Return the maximum diameter among the three options
  return Math.max(diameterThroughCurrent, Math.max(leftDiameter, rightDiameter));
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);

// Call the getDiameter function to calculate the diameter of the binary tree
const diameter = getDiameter(root);
console.log(`Diameter of the binary tree: ${diameter}`);
