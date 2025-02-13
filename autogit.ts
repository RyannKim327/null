// Define the structure of a binary tree node
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
    // Base case: if the node is null, there are no leaf nodes
    if (node === null) {
        return 0;
    }

    // If the node is a leaf node, return 1
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in the left and right subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
// root.right.right remains null (no right child)

const numLeafNodes = countLeafNodes(root);
console.log("Number of leaf nodes:", numLeafNodes);  // Output: Number of leaf nodes: 3
