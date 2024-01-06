class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to perform depth-limited search
function depthLimitedSearch(node, targetValue, depth) {
  if (node === null || depth === 0) {
    return null; // Node not found within depth limit
  }

  if (node.value === targetValue) {
    return node; // Node found
  }

  // Recursively search the left and right subtrees
  const leftResult = depthLimitedSearch(node.left, targetValue, depth - 1);
  if (leftResult) {
    return leftResult; // Node found in the left subtree
  }

  const rightResult = depthLimitedSearch(node.right, targetValue, depth - 1);
  if (rightResult) {
    return rightResult; // Node found in the right subtree
  }

  return null; // Node not found
}

// Constructing a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Perform depth-limited search with a depth limit of 2
const targetNode = depthLimitedSearch(root, 5, 2);
console.log(targetNode ? `Node ${targetNode.value} found` : "Node not found");
