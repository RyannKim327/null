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

    // Helper function to compute depth and update the diameter
    function depth(node: TreeNode | null): number {
        if (node === null) {
            return 0; // Base case: depth of null node is 0
        }

        // Recursively get the depth of the left and right subtree
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update the diameter if the path through the current node is larger
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the height of the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root); // Start the depth-first search
    return diameter; // Return the maximum diameter found
}
// Create a test binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate diameter
const result = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree:", result); // Output: 3
