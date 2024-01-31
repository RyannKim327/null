class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateSum(node) {
  if (node === null) {
    return 0;
  }

  // Recursively calculate the sum of nodes in the left and right subtrees
  const leftSum = calculateSum(node.left);
  const rightSum = calculateSum(node.right);

  // Add the value of the current node to the sum of the subtrees
  return node.value + leftSum + rightSum;
}

// Example usage:
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

const sum = calculateSum(tree);
console.log(sum);  // Output: 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
