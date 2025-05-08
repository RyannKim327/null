// Define the binary tree node structure
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumOfNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  // Sum the current node value plus sums of left and right subtrees
  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}
function sumOfNodesIterative(root: TreeNode | null): number {
  if (!root) return 0;
  
  let sum = 0;
  const stack: TreeNode[] = [root];
  
  while (stack.length > 0) {
    const node = stack.pop()!;
    sum += node.val;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  return sum;
}
