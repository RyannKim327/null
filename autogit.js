// Define the structure of a binary tree node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Function to find the maximum depth of a binary tree
const maxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
};

// Function to find the diameter of a binary tree
const diameterOfBinaryTree = (root) => {
    if (!root) return 0;

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);

    return Math.max(leftMaxDepth + rightMaxDepth, Math.max(leftDiameter, rightDiameter));
};

// Sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Calculate and log the diameter of the binary tree
console.log(diameterOfBinaryTree(root)); // Output: 4
