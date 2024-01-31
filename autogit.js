class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  if (root === null) {
    return 0;
  }

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  // Return the maximum depth of the tree (add 1 for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the maximum depth of the binary tree
const maxDepth = findMaxDepth(root);
console.log(maxDepth); // Outputs: 3
