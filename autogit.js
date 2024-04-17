class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function height(node) {
    if (node === null) {
        return 0;
    }
    
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    return 1 + Math.max(leftHeight, rightHeight);
}

function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }
    
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    
    return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(diameterOfBinaryTree(root)); // Output: 4
