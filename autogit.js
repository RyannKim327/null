class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  if (node === null) {
    return 0; // Base case: empty node, depth is 0
  }
  
  const leftDepth = findMaxDepth(node.left);
  const rightDepth = findMaxDepth(node.right);
  
  return 1 + Math.max(leftDepth, rightDepth); // Maximum depth is the bigger subtree depth + 1
}
// Create sample tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth of the binary tree:", maxDepth);
