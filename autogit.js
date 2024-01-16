class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // If the root is null, the tree has a depth of 0
  if (root === null) {
    return 0;
  } else {
    // Recursively calculate the maximum depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth among the left and right subtrees, plus 1 for the root node
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log('Maximum depth:', maxDepth(root));
