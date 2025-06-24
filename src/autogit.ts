interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
function maxDepth(root: TreeNode | null): number {
    // Base case: if the node is null, the depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the current node is 1 + the maximum of the two subtree depths
    return 1 + Math.max(leftDepth, rightDepth);
}
// Helper function to create a binary tree node
function createNode(val: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode {
    return { val, left, right };
}

// Create a sample binary tree:
//         1
//        / \
//       2   3
//      / \
//     4   5
const tree: TreeNode = createNode(1,
    createNode(2,
        createNode(4),
        createNode(5)
    ),
    createNode(3)
);

// Calculate the maximum depth
console.log(maxDepth(tree)); // Output: 3
