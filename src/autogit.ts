interface TreeNode {
    value?: number; // Optional value for the node
    left: TreeNode | null;
    right: TreeNode | null;
}
function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: empty tree has depth 0
    }

    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the current node is 1 + the maximum of left and right depths
    return 1 + Math.max(leftDepth, rightDepth);
}
// Helper function to create a binary tree node
function createNode(value: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode {
    return { value, left, right };
}

// Create a sample binary tree
const tree: TreeNode = createNode(1,
    createNode(2,
        createNode(4),
        createNode(5)
    ),
    createNode(3)
);

// Calculate the maximum depth
const depth = maxDepth(tree);
console.log(`Maximum depth of the binary tree: ${depth}`); // Output: 3
        1
       / \
      2   3
     / \
    4   5
