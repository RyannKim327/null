// Binary Tree Node Definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in the binary tree
function findSum(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has a sum of 0
  } else {
    return (
      root.value + findSum(root.left) + findSum(root.right)
    ); /* Recursively calculate the sum of the root value, sum of left subtree and sum of right subtree */
  }
}

// Creating a binary tree
const tree = new Node(2);
tree.left = new Node(7);
tree.right = new Node(5);
tree.left.left = new Node(2);
tree.left.right = new Node(6);
tree.right.right = new Node(9);
tree.left.right.left = new Node(5);
tree.left.right.right = new Node(11);

const sum = findSum(tree);
console.log("Sum of all nodes in the binary tree:", sum);
