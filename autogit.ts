class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function countLeafNodes(root: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }

    // If the current node is a leaf node, return 1
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursive case: sum the leaf counts from left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`); // Output: Number of leaf nodes: 3
