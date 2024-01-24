// Binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    return 0; // If the root is null, there are no leaf nodes
  }
  
  if (root.left === null && root.right === null) {
    return 1; // If it is a leaf node, return 1
  }
  
  // Recursively count leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Call the function to count leaf nodes
const leafCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafCount);
