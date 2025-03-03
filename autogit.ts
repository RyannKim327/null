class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        // Recursively find the height of the left and right subtrees
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // Update the diameter if the path through the current node is longer
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the tree rooted at the current node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    return diameter;
}

// Example usage:
// Constructing the binary tree:
//        1
//       / \
//      2   3
//     / \
//    4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 4
