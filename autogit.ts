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
    // If the node is null, return 0
    if (node === null) {
        return 0;
    }

    // If the node is a leaf node, return 1
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Recursively count the leaf nodes in both subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const numberOfLeafNodes = countLeafNodes(root);
console.log(`Number of leaf nodes: ${numberOfLeafNodes}`);
