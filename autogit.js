class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findSum(root) {
  if (root === null) {
    return 0;
  }
  
  // Recursively calculate sum of left and right subtrees
  const leftSum = findSum(root.left);
  const rightSum = findSum(root.right);
  
  // Add the current node's value with the sums of its subtrees
  return root.value + leftSum + rightSum;
}

// Example usage
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

const sum = findSum(tree);
console.log("Sum of all nodes:", sum); // Output: 28
