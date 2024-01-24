// Define the structure of a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the maximum depth of a binary tree
function maxDepth(root) {
  // If the root is null, return 0
  if (root === null) {
    return 0;
  }
  
  // Recursively calculate the maximum depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  // Return the maximum depth between the left and right subtrees,
  // adding 1 to account for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(maxDepth(root));  // Output: 3
