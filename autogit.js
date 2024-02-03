// Tree node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to count leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    // Empty tree, no leaf nodes
    return 0;
  } else if (root.left === null && root.right === null) {
    // We've reached a leaf node
    return 1;
  } else {
    // Recursively count leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
