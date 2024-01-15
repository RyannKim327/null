class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    // Base case: empty tree has a sum of 0
    return 0;
  }

  // Calculate the sum recursively by adding the value of the root node
  // to the sum of its left and right subtrees
  return (
    root.value +
    sumBinaryTree(root.left) +
    sumBinaryTree(root.right)
  );
}

// Example usage:

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the sum
const sum = sumBinaryTree(root);

console.log('Sum of all nodes:', sum);
