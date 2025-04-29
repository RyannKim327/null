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

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // Update maxDiameter if the path passing through this node is longer
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return height of current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    dfs(root);
    return maxDiameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
