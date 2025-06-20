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
function countLeafNodes(root: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }

    // Check if the current node is a leaf node
    if (root.left === null && root.right === null) {
        return 1; // This is a leaf node
    }

    // Recursively count leaf nodes in the left and right subtrees
    const leftCount = countLeafNodes(root.left);
    const rightCount = countLeafNodes(root.right);

    // Return the total count of leaf nodes
    return leftCount + rightCount;
}
// Example binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Count the leaf nodes
const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`); // Output: 3
