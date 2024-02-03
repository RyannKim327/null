class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  // Check if the node is null
  if (node === null) {
    return 0;
  }

  // Check if the node is a leaf node
  if (node.left === null && node.right === null) {
    return 1;
  }

  // Recursively count leaf nodes in the left and right subtrees
  const leftCount = countLeafNodes(node.left);
  const rightCount = countLeafNodes(node.right);

  return leftCount + rightCount;
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Count leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log(`The binary tree has ${leafNodeCount} leaf node(s).`);
The binary tree has 3 leaf node(s).
