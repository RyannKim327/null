class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function calculateSum(node) {
  if (node === null) {
    return 0;
  }
  
  // Recursively calculate the sum of nodes in the left and right subtree
  const leftSum = calculateSum(node.left);
  const rightSum = calculateSum(node.right);

  // Return the sum of the current node's value and the sums of its subtrees
  return node.value + leftSum + rightSum;
}

/* Example binary tree:
        1
       / \
      2   3
     / \   \
    4   5   6
*/
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

const sum = calculateSum(root);
console.log("Sum of all nodes:", sum); // Output: 21
