// Define the structure of a binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the maximum depth of the binary tree
function maxDepth(node) {
  if (!node) {
    // If the node is null, return 0
    return 0;
  } else {
    // Recursively calculate the maximum depth of the left and right subtrees
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);

    // Return the maximum depth among the left and right subtrees, adding 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Call the maxDepth function on the root node
const depth = maxDepth(root);
console.log("Maximum depth of the binary tree:", depth);
