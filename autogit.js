// Define the binary tree node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    return 0; // Empty tree
  }
  
  if (root.left === null && root.right === null) {
    return 1; // Leaf node
  }
  
  // Recursive calls for left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Create a sample binary tree
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// Count the number of leaf nodes
const leafCount = countLeafNodes(tree);
console.log("Number of leaf nodes:", leafCount);
