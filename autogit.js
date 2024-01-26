class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  // Base case: an empty tree has zero leaf nodes
  if (node === null) {
    return 0;
  }

  // Check if the node is a leaf node
  if (node.left === null && node.right === null) {
    return 1;
  }

  // Recursive case: count the leaf nodes in the left and right subtrees
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
