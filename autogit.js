class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  // Base case: if the root is null, return 0
  if (root === null) {
    return 0;
  }
  
  // If node is a leaf (no children), return 1
  if (root.left === null && root.right === null) {
    return 1;
  }

  // Recursively count the leaf nodes in the left and right subtrees
  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);

  // Return the sum of leaf nodes in the left and right subtrees
  return leftCount + rightCount;
}
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Count the number of leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
Number of leaf nodes: 5
