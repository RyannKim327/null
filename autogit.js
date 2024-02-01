// Define a Node class for the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the maximum depth of a binary tree
function maxDepth(root) {
  // If the tree is empty, the depth is 0
  if (root === null) {
    return 0;
  } else {
    // Recursively calculate the depths of the left and right subtrees
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    // Return the maximum depth between the left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
// Create a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate and print the maximum depth
console.log("Maximum depth:", maxDepth(root));
