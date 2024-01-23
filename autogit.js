class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  // Base case: if the tree is empty, return 0
  if (root === null) {
    return 0;
  }

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  // Return the maximum depth between the left and right subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

// Constructing a binary tree:
//      3
//     / \
//    9  20
//      /  \
//     15   7

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

const maxDepth = findMaxDepth(root);
console.log(maxDepth); // Output: 3
