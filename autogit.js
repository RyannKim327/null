class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the diameter of a binary tree
function findDiameter(root) {
  let diameter = 0;

  // Helper function to calculate the height of a node
  function height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update the diameter if the current path is longer
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root); // Start the recursion from the root node

  return diameter;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Diameter of the binary tree:", findDiameter(root));
