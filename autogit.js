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
    return 1;
  }

  return countLeafNodes(node.left) + countLeafNodes(node.right);
}
// Create the binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Count the number of leaf nodes
let leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
Number of leaf nodes: 4
