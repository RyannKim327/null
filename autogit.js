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
  
  // If the root has no children (leaf node), return 1
  if (root.left === null && root.right === null) {
    return 1;
  }

  // Recursively count the leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:

// Create the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

// Count the leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log('Number of leaf nodes:', leafNodeCount);
