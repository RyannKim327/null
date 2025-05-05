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

    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return 0; // Base case: the depth of a non-existing node is 0
        }

        // Recursively find the depth of left and right children
        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        // Update the diameter if the path through the current node is larger
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the depth of the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root); // Start DFS from the root
    return diameter; // Return the calculated diameter
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
