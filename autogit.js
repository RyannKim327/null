class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  if (node === null) {
    return 0; // base case: empty tree has depth 0
  }

  const leftDepth = findMaxDepth(node.left); // find depth of left subtree
  const rightDepth = findMaxDepth(node.right); // find depth of right subtree

  return Math.max(leftDepth, rightDepth) + 1; // return the max depth + 1
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(findMaxDepth(root)); // Output: 3
