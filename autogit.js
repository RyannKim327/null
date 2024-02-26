// Binary tree node definition
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to calculate the height of a tree
function height(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
}

// Function to calculate the diameter of a binary tree
function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Diameter of the binary tree is: " + diameterOfBinaryTree(root));
