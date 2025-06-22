// Definition of a binary tree node
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
    // Variable to store the maximum diameter
    let maxDiameter = 0;

    // Helper function to calculate the height of the tree
    function calculateHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0; // Base case: height of an empty tree is 0
        }

        // Recursively calculate the height of the left and right subtrees
        const leftHeight = calculateHeight(node.left);
        const rightHeight = calculateHeight(node.right);

        // Update the maximum diameter if the current node's diameter is larger
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start the recursion from the root
    calculateHeight(root);

    // Return the maximum diameter found
    return maxDiameter;
}
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter of the binary tree
const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree:", diameter); // Output: 3
