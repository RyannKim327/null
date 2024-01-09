class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sumBinaryTree(root) {
  if (!root) {
    return 0; // Return 0 if the tree is empty
  }

  // Recursively calculate the sum of nodes in the left and right subtrees
  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  // Return the sum of the current node's value and the sums from the subtrees
  return root.value + leftSum + rightSum;
}

// Create a binary tree
const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the sum of all nodes
const sum = sumBinaryTree(root);
console.log(sum); // Output: 28
