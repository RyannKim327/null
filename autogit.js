class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  // Base case: if the node is null, its depth is 0
  if (node === null) {
    return 0;
  }

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(node.left);
  const rightDepth = findMaxDepth(node.right);

  // Return the maximum depth of the current node by adding 1 to the maximum of the left and right subtree depths
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

// Create a binary tree:
//       1
//      / \
//     2   3
//    / \
//   4   5
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);

// Find the maximum depth of the binary tree
const maxDepth = findMaxDepth(rootNode);

console.log("Maximum Depth:", maxDepth); // Output: Maximum Depth: 3
