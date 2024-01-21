class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findSumOfNodes(root) {
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of nodes in the left and right subtrees
  const leftSum = findSumOfNodes(root.left);
  const rightSum = findSumOfNodes(root.right);

  // Sum the current node's value with the values from left and right subtrees
  return root.data + leftSum + rightSum;
}

// Example usage
const root = new Node(3);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(4);

const sum = findSumOfNodes(root);
console.log("Sum of all nodes:", sum);
