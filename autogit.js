class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Empty tree has a sum of 0
  } else {
    // Recursively calculate the sum of nodes in the left and right subtrees
    const leftSum = sumBinaryTree(root.left);
    const rightSum = sumBinaryTree(root.right);

    // Return the sum of the current node value and the sums of the subtrees
    return root.value + leftSum + rightSum;
  }
}

// Example binary tree
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);

// Calculate the sum of all nodes in the binary tree
const sum = sumBinaryTree(rootNode);
console.log("Sum of all nodes:", sum);
