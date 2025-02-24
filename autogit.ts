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
        return 0;
    }
    // Check if the node is a leaf node
    if (node.left === null && node.right === null) {
        return 1; // This is a leaf node
    }
    // Recursively count leaf nodes in left and right subtree
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`);
