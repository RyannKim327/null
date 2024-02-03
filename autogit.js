// Binary tree node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count leaf nodes in a binary tree
function countLeafNodes(node) {
  if (node === null) {
    return 0; // Base case: an empty tree has no leaf nodes
  } else if (node.left === null && node.right === null) {
    return 1; // Base case: a node with no children is a leaf node
  } else {
    // Recursive case: sum the leaf nodes in the left and right subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
  }
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.right.left = new Node(8);

// Test the countLeafNodes function
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
