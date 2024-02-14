class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findSumOfNodes(root) {
  if (root === null) {
    return 0; // Base case: empty tree has sum = 0
  }
  
  const leftSum = findSumOfNodes(root.left); // Calculate sum of left subtree
  const rightSum = findSumOfNodes(root.right); // Calculate sum of right subtree

  // Return sum of current node value, left subtree sum, and right subtree sum
  return root.value + leftSum + rightSum;
}

// Usage example:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

console.log(findSumOfNodes(tree)); // Output: 28 (1+2+3+4+5+6+7 = 28)
