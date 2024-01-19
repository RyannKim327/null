class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  
  return root.value + sumBinaryTree(root.left) + sumBinaryTree(root.right);
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
console.log(sum);  // Output: 28
       1
     /   \
    2     3
   / \   / \
  4   5 6   7
