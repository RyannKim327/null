// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// Function to calculate the height of a binary tree
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

    // Calculate the diameter passing through the root
    const rootDiameter = height(root.left) + height(root.right);

    // Calculate the diameters of the left and right subtrees
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    // Return the maximum of the three diameters
    return Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));
}

// Example usage:
// Construct a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter of the binary tree
console.log(diameterOfBinaryTree(root)); // Outputs: 3
