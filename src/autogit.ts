// Define the binary tree node structure
interface TreeNode {
    value: any; // Can be any data type
    left: TreeNode | null;
    right: TreeNode | null;
}

// Function to count leaf nodes
function countLeaves(node: TreeNode | null): number {
    if (node === null) {
        return 0; // Null node doesn't contribute to leaf count
    }
    // Check if node is a leaf
    if (node.left === null && node.right === null) {
        return 1;
    }
    // Recursively count leaf nodes in left and right subtrees
    return countLeaves(node.left) + countLeaves(node.right);
}

// Example usage:
const root: TreeNode = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null,
        },
        right: {
            value: 5,
            left: null,
            right: null,
        },
    },
    right: {
        value: 3,
        left: null,
        right: {
            value: 6,
            left: null,
            right: null,
        },
    },
};

// Count leaf nodes in the sample tree
const totalLeaves = countLeaves(root);
console.log(`Number of leaf nodes: ${totalLeaves}`); // Output: Number of leaf nodes: 4
