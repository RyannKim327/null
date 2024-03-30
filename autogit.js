class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Function to find the height of a binary tree
function height(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
}

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    // Diameter can be either in the left subtree, right subtree, or passing through the root
    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Testing the code
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output the diameter of the binary tree
