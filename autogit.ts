class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    // Helper function to calculate the height of the tree
    function height(node: TreeNode | null): number {
        if (!node) return 0;

        // Recursively find the height of the left and right subtrees
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update the diameter - longest path seen so far
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the tree
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root); // Start the height calculation
    return diameter; // Return the calculated diameter
}
