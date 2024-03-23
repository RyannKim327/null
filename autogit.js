// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function diameterOfBinaryTree(root) {
    let diameter = 0;

    function depth(node) {
        if (!node) {
            return 0;
        }

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update the diameter if needed
        diameter = Math.max(diameter, leftDepth + rightDepth);

        return 1 + Math.max(leftDepth, rightDepth);
    }

    depth(root);

    return diameter;
}

// Usage example
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
