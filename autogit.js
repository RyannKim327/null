// Define the Binary Tree Node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function sumOfNodes(root) {
  if (root === null) {
    return 0;
  } else {
    return (
      root.data +
      sumOfNodes(root.left) +
      sumOfNodes(root.right)
    );
  }
}

// Test the function
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

console.log('Sum of all nodes:', sumOfNodes(tree)); // Output: 28
