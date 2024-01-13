// Node class representing a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of nodes in the binary tree
function getSumOfNodes(root) {
  if (root === null) {
    return 0; // Base case: empty node, sum is 0
  } else {
    const leftSum = getSumOfNodes(root.left); // Calculate sum of left subtree
    const rightSum = getSumOfNodes(root.right); // Calculate sum of right subtree
    return root.value + leftSum + rightSum; // Sum the current node value with left and right subtree sums
  }
}

// Create the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the sum of all nodes
const sum = getSumOfNodes(root);
console.log("Sum of all nodes:", sum);
