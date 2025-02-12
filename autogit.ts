class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter: number = 0;

    // Helper function to calculate the height of the tree
    const height = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }

        // Compute the height of left and right subtrees
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update the maximum diameter found so far
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    };

    height(root);

    return maxDiameter;
}

// Example usage:
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(diameterOfBinaryTree(root)); // Output: 3 (the path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3)
