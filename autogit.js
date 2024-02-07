class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  if (node === null) return 0;

  const leftDepth = findMaxDepth(node.left);
  const rightDepth = findMaxDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
// Create nodes
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

// Connect nodes
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

// Call the function to find maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth:", maxDepth);
     1
   /   \
  2     3
 / \
4   5
