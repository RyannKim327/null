class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  // Base case: if the root is null, the depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  // The maximum depth is the larger of the left and right subtree depths, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the maximum depth
const maxDepth = findMaxDepth(root);
console.log(maxDepth); // Output: 3
