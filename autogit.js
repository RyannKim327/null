// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Function to find the maximum depth of a binary tree
function maxDepth(root) {
    if (!root) {
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

// Example tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
