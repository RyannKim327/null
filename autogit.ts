// Define a TreeNode class to represent each node in the binary tree
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

// Function to count the number of leaf nodes
function countLeafNodes(node: TreeNode | null): number {
    // If the node is null, return 0 (base case)
    if (node === null) {
        return 0;
    }

    // If the node is a leaf (no children), return 1
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Recursively count the leaf nodes in the left and right subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

const leafCount = countLeafNodes(root); // Count the leaf nodes
console.log(`Number of leaf nodes: ${leafCount}`); // Output the result
