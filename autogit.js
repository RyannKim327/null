class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the maximum depth of a binary tree
function findMaxDepth(node) {
  // Base case: if the current node is null, return 0
  if (node === null) {
    return 0;
  }
  
  // Recursively calculate the depth of the left and right subtrees
  let leftDepth = findMaxDepth(node.left);
  let rightDepth = findMaxDepth(node.right);
  
  // Return the maximum of the left and right subtree depths, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

// Create a binary tree
let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

// Calculate the maximum depth of the binary tree
let maxDepth = findMaxDepth(root);

console.log('Maximum depth of the binary tree:', maxDepth);
