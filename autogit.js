// Define the binary tree node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    return 0; // If the root is null, there are no leaf nodes
  } else if (root.left === null && root.right === null) {
    return 1; // If the current node has no children, it is a leaf node
  } else {
    // Recursively count the leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage:
// Create the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Count the number of leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
