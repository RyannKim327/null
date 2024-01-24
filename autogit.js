// Define the structure of a binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function calculateSum(root) {
  // Base case: If the root is null, return 0
  if (root === null) {
    return 0;
  }
  
  // Recursive case: Calculate the sum of the left and right subtrees, and add the current node's value
  return (
    root.value + calculateSum(root.left) + calculateSum(root.right)
  );
}

// Test the function
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

console.log(calculateSum(tree)); // Output: 15
