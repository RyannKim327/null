class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    // Base case: empty tree
    return 0;
  } else {
    // Recursive case: sum of current node's value and left and right subtrees
    return (
      root.value + sumOfNodes(root.left) + sumOfNodes(root.right)
    );
  }
}

// Usage example:

// Create the binary tree
const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

// Calculate the sum of all nodes
const sum = sumOfNodes(root);
console.log(sum); // Output: 35
