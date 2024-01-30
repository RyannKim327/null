class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  let sum = root.value;
  sum += sumBinaryTree(root.left);
  sum += sumBinaryTree(root.right);

  return sum;
}

// Example usage:
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the sum of all nodes
const sum = sumBinaryTree(root);
console.log("Sum of all nodes:", sum); // Output: Sum of all nodes: 15
