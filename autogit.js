// Define the binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes
function findSum(root) {
  if (root === null) {
    return 0;
  } else {
    return (
      root.value +
      findSum(root.left) +
      findSum(root.right)
    );
  }
}

// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the sum of all nodes
const sum = findSum(root);
console.log('Sum of nodes:', sum);
