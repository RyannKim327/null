class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  if (root === null) {
    return 0; // base case: empty tree
  } else {
    // recursively find the maximum depth of the left and right subtree
    const leftDepth = findMaxDepth(root.left);
    const rightDepth = findMaxDepth(root.right);

    // return the maximum depth between the left and right subtree
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log(`Max Depth: ${findMaxDepth(root)}`);
