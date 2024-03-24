class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return 1 + Math.max(leftDepth, rightDepth);
}

// Example of creating a binary tree
const tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));

console.log(maxDepth(tree)); // Output: 3
