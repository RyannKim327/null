class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(rootNode) {
  if (rootNode === null) {
    return 0;
  }

  // If the current node is a leaf node (both left and right child are null),
  // return 1.
  if (rootNode.left === null && rootNode.right === null) {
    return 1;
  }

  // Recursively count the leaf nodes in the left and right subtrees.
  const leftCount = countLeafNodes(rootNode.left);
  const rightCount = countLeafNodes(rootNode.right);

  // Return the sum of leaf nodes in the left and right subtrees.
  return leftCount + rightCount;
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
