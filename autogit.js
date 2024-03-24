// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function diameterOfBinaryTree(root) {
    // Helper function to calculate the height of a node
    function getHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }
    
    let diameter = 0;

    // Helper function to calculate the diameter of the binary tree
    function calculateDiameter(node) {
        if (!node) return 0;

        // Calculate the height of the left and right subtrees
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);

        // Calculate the diameter passing through the current node
        let currentDiameter = leftHeight + rightHeight;

        // Update the global diameter if the current one is greater
        diameter = Math.max(diameter, currentDiameter);

        // Recursively calculate the diameter of left and right subtrees
        calculateDiameter(node.left);
        calculateDiameter(node.right);

        return currentDiameter;
    }

    calculateDiameter(root);
    
    return diameter;
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output the diameter of the binary tree
