class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root: TreeNode | null): number {
    // Base case: if the node is null, the depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively find the depth of the left and right subtree
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is the greater of the two depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
