// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Function to calculate the maximum depth of a binary tree
function maxDepth(root) {
    if (root === null) {
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
}

// Example binary tree
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root)); // Output: 3
