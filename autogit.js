// Define the Binary Tree Node object
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function calculateSum(root) {
  if (!root) {
    return 0; // Base case: empty subtree, return 0
  }

  // Recursively calculate the sum of nodes in the left and right subtrees
  const sumLeft = calculateSum(root.left);
  const sumRight = calculateSum(root.right);

  return root.value + sumLeft + sumRight; // Return the sum of current node and the sums of the subtrees
}

// Create a sample binary tree
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

// Calculate the sum of all nodes in the binary tree
const sum = calculateSum(tree);
console.log("Sum of all nodes:", sum); // Output: Sum of all nodes: 15
