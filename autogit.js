class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has depth 0
  }

  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1; // Add 1 to the max depth of subtrees
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const maxDepth = findMaxDepth(root);
console.log("Maximum depth:", maxDepth);
