class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  // Base case: an empty tree has 0 leaf nodes
  if (root === null) {
    return 0;
  }
  
  // Check if the current node is a leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  // Recursive case: count leaf nodes in the left and right subtrees
  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);
  
  // Return the sum of leaf nodes in the left and right subtrees
  return leftCount + rightCount;
}

// Example usage:
// Create a binary tree
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);

// Get the number of leaf nodes
const leafCount = countLeafNodes(tree);
console.log(leafCount); // Output: 3 (nodes 4, 5, and 6 are leaf nodes)
