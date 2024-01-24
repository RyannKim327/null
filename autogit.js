class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    return 0;
  }

  let sum = root.value;
  sum += sumOfNodes(root.left);
  sum += sumOfNodes(root.right);

  return sum;
}

// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Sum of all nodes:", sumOfNodes(root)); // Output: 28
