class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function getMaxDepth(root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = getMaxDepth(root.left);
  const rightDepth = getMaxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}

// Usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(getMaxDepth(root)); // Output: 3
