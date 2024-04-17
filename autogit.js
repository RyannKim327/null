// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Function to find the number of leaf nodes in a binary tree
function countLeafNodes(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.left === null && root.right === null) {
        return 1;
    }
    
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage
// Construct a binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Calculate the number of leaf nodes
const leafNodesCount = countLeafNodes(root);
console.log("Number of leaf nodes in the binary tree:", leafNodesCount);
