class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findMaxDepth(root) {
  if (!root) {
    return 0;
  }
  
  const stack = [{ node: root, depth: 1 }];
  let maxDepth = 0;
  
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    maxDepth = Math.max(maxDepth, depth);
    
    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }
    
    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }
  
  return maxDepth;
}

// Example usage:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(6);

console.log(findMaxDepth(tree)); // Output: 3
