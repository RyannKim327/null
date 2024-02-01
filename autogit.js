class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;  // It's a leaf node
  }

  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);

  return leftCount + rightCount;
}

// Usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);  // Output: 4
