// Binary Tree Node
function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

// Function to find sum of all nodes in a binary tree
function findSum(root) {
  // Base case: if root is null, return 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of nodes in left and right subtrees
  const leftSum = findSum(root.left);
  const rightSum = findSum(root.right);

  // Add the current node value to the sum of left and right subtrees
  return root.value + leftSum + rightSum;
}

// Test the function
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const sum = findSum(root);
console.log("Sum of all nodes:", sum); // Output: 28
