class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  if (root === null) {
    // If the root is null, the tree has no depth
    return 0;
  }

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  // Return the maximum depth found plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.right = new Node(4);
tree.right.left = new Node(5);
tree.right.right = new Node(6);

console.log(findMaxDepth(tree)); // Output: 3
