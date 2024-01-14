// Define a TreeNode class representing each node in the binary tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in the binary tree
function calculateSum(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has no sum
  } else {
    const leftSum = calculateSum(root.left); // Calculate the sum of nodes in the left subtree
    const rightSum = calculateSum(root.right); // Calculate the sum of nodes in the right subtree
    return root.value + leftSum + rightSum; // Return the sum of current node, left subtree sum, and right subtree sum
  }
}

// Example usage:
const rootNode = new TreeNode(5);
rootNode.left = new TreeNode(3);
rootNode.right = new TreeNode(8);
rootNode.left.left = new TreeNode(2);
rootNode.left.right = new TreeNode(4);
rootNode.right.left = new TreeNode(7);
rootNode.right.right = new TreeNode(9);

const sum = calculateSum(rootNode);
console.log("Sum of all nodes:", sum);
