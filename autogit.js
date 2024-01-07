class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // Empty tree has a depth of 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth plus one
  return Math.max(leftDepth, rightDepth) + 1;
}

// Test the code
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(maxDepth(root)); // Output: 3 (from root to leaf node '7')
