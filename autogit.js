// Definition of a binary tree node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1; // A leaf node
    }

    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Count the number of leaf nodes
const leafCount = countLeafNodes(root);

console.log("Number of leaf nodes: " + leafCount);
