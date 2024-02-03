// Define the binary tree node structure
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function sumOfNodes(root) {
  if (root === null) {
    return 0; // Base case: empty tree has sum = 0
  }

  const leftSum = sumOfNodes(root.left); // Sum of nodes in the left subtree
  const rightSum = sumOfNodes(root.right); // Sum of nodes in the right subtree

  return root.value + leftSum + rightSum; // Sum of nodes = current node value + sum of left subtree + sum of right subtree
}

// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the sum of nodes
const sum = sumOfNodes(root);
console.log("Sum of nodes:", sum);
