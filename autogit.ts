class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(val: number) {
        this.val = val;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function height(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update diameter
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return height of the tree
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return diameter;
}

// Example usage:
// Creating a binary tree:
//         1
//        / \
//       2   3
//      / \
//     4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
