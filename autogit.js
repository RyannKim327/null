// Define a Node class for the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function calculateSum(root) {
  // Base case: if the root is null, return 0
  if (root === null) {
    return 0;
  }
  
  // Recursive case: calculate the sum of the current node, left sub-tree, and right sub-tree
  return (
    root.value +
    calculateSum(root.left) +
    calculateSum(root.right)
  );
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the sum
const sum = calculateSum(root);
console.log("Sum of all nodes:", sum);
