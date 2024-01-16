// Node constructor
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the maximum depth
function maxDepth(root) {
  // If the root is null, the depth is 0
  if (root === null) {
    return 0;
  }

  // Calculate the maximum depth of the left and right subtrees recursively
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(maxDepth(root)); // Output: 3
