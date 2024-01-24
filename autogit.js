class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (!root) {
    return 0; // Return 0 for empty nodes
  } else {
    // Recursively calculate the sum of left and right subtree nodes
    const leftSum = sumOfNodes(root.left);
    const rightSum = sumOfNodes(root.right);
    
    return root.val + leftSum + rightSum; // Sum the current node's value with left and right subtree sums
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumOfNodes(root)); // Output: 15
