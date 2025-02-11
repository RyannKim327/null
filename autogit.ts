class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

function countLeafNodes(node: TreeNode | null): number {
    if (node === null) {
        return 0; // If the node is null, return 0
    }

    // If the node is a leaf node (no children)
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in left and right subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`); // Output: Number of leaf nodes: 3
