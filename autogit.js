class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  
  // Recursively calculate the maximum depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  // Return the maximum of the depths of the left and right subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a binary tree
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

// Find the maximum depth
const depth = maxDepth(root);
console.log(depth); // Output: 3
