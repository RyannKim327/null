class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function height(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update diameter at this node
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Height of node is max height of one subtree + 1
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return diameter;
}
const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3);

console.log(diameterOfBinaryTree(root)); // Output: 3
        1
       / \
      2   3
     / \
    4   5
