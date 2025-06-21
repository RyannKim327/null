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
    // Variable to store the maximum diameter found
    let maxDiameter = 0;

    // Helper function to calculate the height of the tree and update the diameter
    function calculateHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0; // Base case: height of an empty tree is 0
        }

        // Recursively calculate the height of the left and right subtrees
        const leftHeight = calculateHeight(node.left);
        const rightHeight = calculateHeight(node.right);

        // Calculate the diameter for the current node
        const currentDiameter = leftHeight + rightHeight;

        // Update the global maximum diameter
        maxDiameter = Math.max(maxDiameter, currentDiameter);

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start the recursive calculation
    calculateHeight(root);

    // Return the maximum diameter found
    return maxDiameter;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Diameter of the binary tree:", diameterOfBinaryTree(root)); // Output: 3
