// Binary tree node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Calculate sum of all nodes in a binary tree
function sumOfNodes(root) {
  if (root === null) {
    return 0; // Base case: empty tree has sum 0
  }

  // Recursive case: sum of nodes = node value + sum of left subtree + sum of right subtree
  return (
    root.value +
    sumOfNodes(root.left) +
    sumOfNodes(root.right)
  );
}

// Create a binary tree
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);

// Calculate the sum of all nodes in the binary tree
const sum = sumOfNodes(rootNode);
console.log(sum); // Output: 28
