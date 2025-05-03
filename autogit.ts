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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;
  
  function height(node: TreeNode | null): number {
    if (!node) return 0;
    
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    // The diameter at this node will be the sum of left and right subtree heights
    diameter = Math.max(diameter, leftHeight + rightHeight);
    
    // Height of this node is max height of its subtrees + 1
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  height(root);
  return diameter;
}
const root = new TreeNode(1, 
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3)
            );

console.log(diameterOfBinaryTree(root));  // Output: 3
