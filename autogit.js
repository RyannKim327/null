// Binary tree node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the maximum depth of a binary tree
function maxDepth(root) {
  // If the root is null, the depth is 0
  if (root === null) {
    return 0;
  } else {
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth among the left and right subtrees, plus 1 for the root
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(maxDepth(root)); // Output: 3
