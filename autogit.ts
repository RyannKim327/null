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

function countLeafNodes(node: TreeNode | null): number {
    if (node === null) {
        return 0; // Base case: If the node is null, return 0
    }
    // If it's a leaf node, return 1
    if (node.left === null && node.right === null) {
        return 1;
    }
    // Recursively count the leaf nodes in both subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`);
