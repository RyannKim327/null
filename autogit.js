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

  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  return root.value + leftSum + rightSum;
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
console.log(sum); // Output: 15
