// Node class to define the structure of a node in the binary tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the sum of all nodes in a binary tree using depth-first search
function sumBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  return root.value + sumBinaryTree(root.left) + sumBinaryTree(root.right);
}

// Example binary tree
/*
        1
       / \
      2   3
     / \
    4   5
*/
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);

// Calculate the sum of all nodes in the binary tree
const sum = sumBinaryTree(rootNode);
console.log("Sum of all nodes in the binary tree: ", sum);
