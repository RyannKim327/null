// Node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Calculate the sum of all nodes in the binary tree
function calculateSum(root) {
  if (root === null) {
    return 0;
  } else {
    return (
      root.value +
      calculateSum(root.left) +
      calculateSum(root.right)
    );
  }
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the sum of all nodes in the binary tree
const sum = calculateSum(root);
console.log('Sum of all nodes:', sum); // Output: Sum of all nodes: 15
