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

    function depth(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }

        // Recursively find the depth of the left and right subtrees
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update the global diameter (longest path found so far)
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the depth of the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);
    return diameter;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
