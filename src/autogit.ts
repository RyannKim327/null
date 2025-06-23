class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function countLeafNodes(root: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }

    // Check if the current node is a leaf node
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in the left and right subtrees
    const leftCount = countLeafNodes(root.left);
    const rightCount = countLeafNodes(root.right);

    return leftCount + rightCount;
}
// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

// Count the leaf nodes
const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`); // Output: Number of leaf nodes: 3
console.log(countLeafNodes(null)); // Output: 0 (empty tree)
console.log(countLeafNodes(new TreeNode(10))); // Output: 1 (single node tree)
