class TreeNode {
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

// Example binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let sum = sumBinaryTree(root);
console.log("Sum of all nodes in the binary tree: " + sum); // Output: 15
