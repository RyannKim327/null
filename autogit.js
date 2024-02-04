class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in the binary tree
function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Return 0 when the root is null
  } else {
    // Recursively calculate the sum of nodes in the left and right subtrees
    const leftSum = sumBinaryTree(root.left);
    const rightSum = sumBinaryTree(root.right);

    return root.value + leftSum + rightSum; // Return the sum of current node value with left and right subtree sums
  }
}

// Example usage:
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

console.log('Sum of all nodes:', sumBinaryTree(root)); // Output: 28
