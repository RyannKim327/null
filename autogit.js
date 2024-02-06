// Define the binary tree node structure
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    return 0; // If the tree is empty, there are no leaf nodes
  }

  if (root.left === null && root.right === null) {
    return 1; // If the node has no children, it's a leaf node
  }

  // Recursively traverse the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Call the function and print the result
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
