class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root) {
    let ans = 0;

    function depth(node) {
        if (!node) {
            return 0;
        }

        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);
        ans = Math.max(ans, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);

    return ans;
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
