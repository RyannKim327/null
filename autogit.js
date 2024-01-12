class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    return 0; // Base case for empty tree
  }

  // Recursively calculate the sum of left and right subtrees
  const leftSum = sumOfNodes(root.left);
  const rightSum = sumOfNodes(root.right);

  // Return the sum of current node value, left subtree sum, and right subtree sum
  return root.value + leftSum + rightSum;
}

// Create a sample binary tree
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// Calculate the sum of all nodes
const sum = sumOfNodes(tree);
console.log('Sum of all nodes:', sum);
