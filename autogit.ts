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

function sumTree(root: TreeNode | null): number {
  if (root === null) return 0;
  return root.val + sumTree(root.left) + sumTree(root.right);
}
function sumTreeIterative(root: TreeNode | null): number {
  if (root === null) return 0;
  
  let sum = 0;
  const stack: TreeNode[] = [root];

  while (stack.length) {
    const node = stack.pop()!;
    sum += node.val;
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return sum;
}
