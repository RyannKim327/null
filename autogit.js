class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateSum(root) {
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of the left and right subtrees
  const leftSum = calculateSum(root.left);
  const rightSum = calculateSum(root.right);

  // Return the sum of the current node's value, left subtree sum, and right subtree sum
  return root.value + leftSum + rightSum;
}

// Example tree:       1
//                   /   \
//                  2     3
//                 / \   / \
//                4   5 6   7

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const sum = calculateSum(root);
console.log('Sum of all nodes:', sum); // Output: 28
