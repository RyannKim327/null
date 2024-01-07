class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  // Base case: if the node is null, return 0
  if (node === null) {
    return 0;
  }

  // Recursively calculate the maximum depth of the left and right subtrees
  const leftDepth = findMaxDepth(node.left);
  const rightDepth = findMaxDepth(node.right);

  // Return the maximum depth of the two subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a binary tree with the following structure:
//        1
//       / \
//      2   3
//         / \
//        4   5
const root = new Node(1);
root.left = new Node(2);

const node3 = new Node(3);
root.right = node3;

node3.left = new Node(4);
node3.right = new Node(5);

console.log(findMaxDepth(root)); // Output: 3
