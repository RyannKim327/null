class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  if (node === null) {
    return 0; // Base case: empty tree has no leaf nodes
  }
  if (node.left === null && node.right === null) {
    return 1; // Base case: leaf node encountered
  }
  const leftCount = countLeafNodes(node.left);
  const rightCount = countLeafNodes(node.right);
  return leftCount + rightCount;
}

// Example usage:
// Creating a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Counting the leaf nodes
const leafCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafCount);
