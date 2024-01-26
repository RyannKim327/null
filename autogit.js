class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0;
  }
  
  // If the node is a leaf node, return 1
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  // Recursively count leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:
// Creating a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Counting the number of leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log('Number of leaf nodes:', leafNodeCount);
Number of leaf nodes: 3
