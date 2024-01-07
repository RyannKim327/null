class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  // Base case: an empty tree or a leaf node
  if (root === null) {
    return 0;
  }
  
  // Check if it's a leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  // Recursively count the leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);

const leafNodeCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafNodeCount}`);
