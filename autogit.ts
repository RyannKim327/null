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
    let maxDiameter = 0;

    function height(node: TreeNode | null): number {
        if (node === null) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update the maxDiameter with the sum of left and right heights
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of the subtree rooted at this node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return maxDiameter;
}

// Example usage:
// Create a binary tree and find its diameter
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3 (4 -> 2 -> 1 -> 3)
