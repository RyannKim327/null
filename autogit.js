// Node class represents a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the diameter of a binary tree
function findDiameter(root) {
  let diameter = 0;

  // Helper function to calculate the height of a tree
  function calculateHeight(node) {
    if (node === null) {
      return 0;
    }
    
    // Recursively calculate the height of the left and right subtrees
    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);

    // Update the diameter if the current path has a greater length
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the subtree rooted at the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Start the calculation from the root node
  calculateHeight(root);

  return diameter;
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Find the diameter of the binary tree
const diameter = findDiameter(root);
console.log(`Diameter of the binary tree: ${diameter}`);
