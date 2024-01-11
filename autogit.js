class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (!root) {
    // Empty tree
    return 0;
  }
  
  if (!root.left && !root.right) {
    // Leaf node
    return 1;
  }
  
  // Recursively count leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

// Output the number of leaf nodes
console.log(countLeafNodes(root)); // Output: 3
