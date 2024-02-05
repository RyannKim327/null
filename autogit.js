// Node class representing a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function sumBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of the left and right subtrees
  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  // Return the sum of current node value, left subtree sum, and right subtree sum
  return root.value + leftSum + rightSum;
}
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the sum of all nodes in the binary tree
const sum = sumBinaryTree(root);
console.log("Sum of all nodes:", sum);
