// Define the binary tree node structure
class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Function to compute the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

// Function to calculate the diameter of a binary tree
function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  
  // Calculate the height of the left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Calculate the diameter recursively for left and right subtrees
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);
  
  // Return the maximum of the following three:
  // - Diameter of the left subtree
  // - Diameter of the right subtree
  // - Length of the longest path that passes through the root
  return Math.max(
    leftHeight + rightHeight,
    Math.max(leftDiameter, rightDiameter)
  );
}

// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate and print the diameter of the binary tree
const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree:", diameter);
