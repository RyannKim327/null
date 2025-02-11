class TreeNode {
    value: number; // or use any type you require
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
        return 0; // The depth of an empty tree is 0
    }

    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the tree is the greater of the two subtrees' depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output should be 3
