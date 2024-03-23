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
    return 1 + Math.max(height(node.left), height(node.right));
}

function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    return Math.max(leftHeight + rightHeight + 1, leftDiameter, rightDiameter);
}

// Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 4
