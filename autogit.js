// Define the structure of a binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the maximum depth
function maxDepth(root) {
  // Base case: empty tree
  if (root === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth of the subtrees + 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const depth = maxDepth(root);
console.log(`Maximum Depth: ${depth}`);
