class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSum(root) {
  if (root === null) {
    return 0;  // Base case: empty tree has sum 0
  } else {
    // Recursively find the sum of left and right subtrees
    const leftSum = findSum(root.left);
    const rightSum = findSum(root.right);

    // Return the sum of current node value and sums of left and right subtrees
    return root.value + leftSum + rightSum;
  }
}

// Example usage:
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

const sum = findSum(tree);
console.log('Sum of all nodes:', sum); // Output: 15
      1
     / \
    2   3
   / \
  4   5
