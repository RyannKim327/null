// Define the binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count leaf nodes in a binary tree
function countLeafNodes(node) {
  // Base case: if node is null, return 0
  if (node === null) {
    return 0;
  }

  // Base case: if node is a leaf node, return 1
  if (node.left === null && node.right === null) {
    return 1;
  }

  // Recursive case: count leaf nodes in the left and right subtrees
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage

// Create nodes for the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Call the function to count leaf nodes
const leafNodeCount = countLeafNodes(root);

console.log("Number of leaf nodes: " + leafNodeCount);
