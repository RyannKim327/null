class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getSumOfNodes(root) {
  // Base case: if the root is null, return 0
  if (root === null) {
    return 0;
  }

  // Recursively compute the sum of nodes in the left and right subtrees
  const leftSum = getSumOfNodes(root.left);
  const rightSum = getSumOfNodes(root.right);

  // Return the sum of the root value, left subtree sum, and right subtree sum
  return root.value + leftSum + rightSum;
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the sum of all nodes
const sum = getSumOfNodes(root);
console.log("Sum of all nodes:", sum);
