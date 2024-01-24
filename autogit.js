class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getSumOfNodes(root) {
  if (root === null) return 0; // base case: empty tree, sum is 0

  const sumLeft = getSumOfNodes(root.left); // recursive call for the left subtree
  const sumRight = getSumOfNodes(root.right); // recursive call for the right subtree

  return root.value + sumLeft + sumRight; // sum of current node value with sums of left and right subtrees
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Sum of all nodes:", getSumOfNodes(root));
