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
    // Leaf node
    return 1;
  }
  
  // Recursively count leaf nodes in the left and right subtrees
  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);
  
  return leftCount + rightCount;
}

// Usage example:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
