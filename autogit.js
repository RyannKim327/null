class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(node) {
    if (node === null) {
        return 0;
    }
    
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root)); // Output: 3
