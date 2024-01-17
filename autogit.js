// Binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count leaf nodes in a binary tree
function countLeafNodes(root) {
  // Base case: an empty tree has 0 leaf nodes
  if (root === null) {
    return 0;
  }

  // Base case: a leaf node has 1 leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }

  // Recursive case: find leaf nodes in the left and right subtrees
  const leftLeafNodes = countLeafNodes(root.left);
  const rightLeafNodes = countLeafNodes(root.right);

  // Return the sum of leaf nodes in the left and right subtrees
  return leftLeafNodes + rightLeafNodes;
}

// Test the function
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Number of leaf nodes:", countLeafNodes(root)); // Output: 3
