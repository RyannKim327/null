class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function getHeight(node) {
    if (node === null) {
        return 0;
    }
    
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }
    
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    
    return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

// Example usage
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
