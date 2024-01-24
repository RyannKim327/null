class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDepth(node) {
  if (node === null) {
    return 0; // base case: empty tree
  }

  const leftDepth = findDepth(node.left);
  const rightDepth = findDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const depth = findDepth(root);
console.log('Maximum depth:', depth);
