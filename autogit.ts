class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function height(node: TreeNode | null): number {
        if (node === null) return 0;

        // Compute the height of left and right subtrees
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update the diameter if the sum of left and right heights is larger
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the tree rooted at this node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    height(root);
    return diameter;
}
// Creating a simple binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = diameterOfBinaryTree(root);
console.log(result); // This will output the diameter of the binary tree
