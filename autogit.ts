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
    if (root === null) {
        return 0; // Base case: the depth of an empty tree is 0
    }
    
    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // The maximum depth is the greater of the two subtrees' depths plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(maxDepth(root)); // Output: 3
