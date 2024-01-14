// Node constructor
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate sum of all nodes in binary tree
function calculateSum(root) {
  if (root === null) {
    return 0; // Return 0 for null nodes
  } else {
    return (
      root.value +
      calculateSum(root.left) +
      calculateSum(root.right)
    ); // Recursively calculate sum of left and right subtrees
  }
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const sum = calculateSum(root);
console.log("Sum of all nodes:", sum);
