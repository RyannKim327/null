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
    
    // Check if it's a leaf node
    if (root.left === null && root.right === null) {
        return 1; // It is a leaf node
    }
    
    // Recursively count leaf nodes in left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`); // Output: 3
