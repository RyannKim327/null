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

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: If the tree is empty, its depth is 0
    }

    // Compute the depth of each subtree
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is the greater of the two, plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Creating a simple binary tree 
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(maxDepth(root)); // Output: 3
