class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Base case: empty tree has sum 0
  }
  
  const leftSum = sumBinaryTree(root.left); // Sum of left subtree
  const rightSum = sumBinaryTree(root.right); // Sum of right subtree
  
  return root.value + leftSum + rightSum; // Sum of current node with left and right subtree sums
}

// Usage example:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumBinaryTree(root)); // Output: 15 (1 + 2 + 3 + 4 + 5)
