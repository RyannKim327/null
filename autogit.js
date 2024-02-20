// Define the TreeNode class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to calculate the height of a binary tree
function getHeight(node) {
    if (node === null) {
        return 0;
    }
    
    // Recursively calculate the height of the left and right subtrees
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    
    // Return the maximum height plus one
    return Math.max(leftHeight, rightHeight) + 1;
}

// Function to calculate the diameter of a binary tree
function getDiameter(node) {
    if (node === null) {
        return 0;
    }
    
    // Calculate the height of the left and right subtrees
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    
    // Calculate the diameter passing through the current node
    const throughRoot = leftHeight + rightHeight + 1;
    
    // Calculate the diameter not passing through the current node recursively
    const leftDiameter = getDiameter(node.left);
    const rightDiameter = getDiameter(node.right);
    
    // Return the maximum of the three diameters
    return Math.max(throughRoot, leftDiameter, rightDiameter);
}

// Example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate and output the diameter of the binary tree
console.log(getDiameter(root)); // Output: 4
