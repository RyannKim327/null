class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0; // Base case: empty tree has zero leaf nodes
  }

  if (root.left === null && root.right === null) {
    return 1; // Base case: node with no children is a leaf node
  }

  const leftCount = countLeafNodes(root.left); // Recursively count leaf nodes in the left subtree
  const rightCount = countLeafNodes(root.right); // Recursively count leaf nodes in the right subtree

  return leftCount + rightCount; // Add the counts from left and right subtrees
}

// Example usage:

// Create sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

// Call the function to count leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
