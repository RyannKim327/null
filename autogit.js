class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has no leaf nodes
  } else if (root.left === null && root.right === null) {
    return 1; // Base case: a tree with only a root node is a leaf node
  } else {
    // Recursively count leaf nodes in the left and right subtrees
    const leftCount = countLeafNodes(root.left);
    const rightCount = countLeafNodes(root.right);
    return leftCount + rightCount;
  }
}

// Example usage:

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Call the countLeafNodes function
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
