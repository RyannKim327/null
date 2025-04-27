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

    const height = (node: TreeNode | null): number => {
        if (!node) {
            return 0; // height of an empty node is 0
        }

        // Recursively find the height of left and right subtrees
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update the diameter if the path through this node is longer
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    };

    height(root); // Start the height calculation
    return diameter; // Return the maximum diameter found
}

// Example Usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = diameterOfBinaryTree(root);
console.log(result); // Output: 3
