// Define the structure for a Binary Tree Node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Function to calculate the height of a node
function getHeight(node) {
    if (node === null) {
        return 0;
    }
    
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    
    return 1 + Math.max(leftHeight, rightHeight);
}

// Function to find the diameter of a binary tree
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

// Example of creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Calculate the diameter of the binary tree
const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree is: ", diameter);
