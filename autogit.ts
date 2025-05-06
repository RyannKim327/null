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

    const height = (node: TreeNode | null): number => {
        if (!node) return 0; // Base case: height of a null node is 0

        // Recursively find the height of left and right subtrees
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        
        // Update the diameter if the path through this node is longer
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the tree rooted at "node"
        return 1 + Math.max(leftHeight, rightHeight);
    };

    height(root); // Start the height calculation
    return diameter; // Return the calculated diameter
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
