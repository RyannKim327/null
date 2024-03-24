class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  if (node === null) {
    return 0;
  }
  
  if (node.left === null && node.right === null) {
    return 1; // Node is a leaf node
  }
  
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes in the binary tree: " + leafNodeCount);
