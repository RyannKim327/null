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

    function height(node: TreeNode | null): number {
        if (!node) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update the diameter at this node
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of this node's subtree
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root); // Calculate height and update diameter
    return diameter; // Return the maximum diameter found
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = diameterOfBinaryTree(root);
console.log(`Diameter of the binary tree is: ${result}`);
