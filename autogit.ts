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
    // If the node is null, it contributes 0 to the count of leaf nodes
    if (node === null) {
        return 0;
    }

    // If the node is a leaf node, return 1
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Recursively count the leaf nodes in the left and right subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
// Creating the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`);
