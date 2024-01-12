// Define a Node class for each node in the binary tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the sum of all nodes in the binary tree
function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Empty tree, sum is 0
  } else {
    const leftSum = sumBinaryTree(root.left); // Recursively calculate sum of left subtree
    const rightSum = sumBinaryTree(root.right); // Recursively calculate sum of right subtree
    return root.value + leftSum + rightSum; // Return sum of root value and both subtrees
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

// Calculate and print the sum of all nodes in the binary tree
const sum = sumBinaryTree(root);
console.log("Sum of all nodes:", sum); // Output: 28
