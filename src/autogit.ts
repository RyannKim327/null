// Definition of a binary tree node
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

// Function to calculate the diameter of a binary tree
function diameterOfBinaryTree(root: TreeNode | null): number {
    // Helper function to calculate height and update diameter
    function calculateHeightAndDiameter(node: TreeNode | null): [number, number] {
        if (node === null) {
            return [0, 0]; // [height, diameter]
        }

        // Recursively calculate height and diameter for left and right subtrees
        const [leftHeight, leftDiameter] = calculateHeightAndDiameter(node.left);
        const [rightHeight, rightDiameter] = calculateHeightAndDiameter(node.right);

        // Height of the current node is 1 + max(leftHeight, rightHeight)
        const currentHeight = 1 + Math.max(leftHeight, rightHeight);

        // Diameter through the current node
        const diameterThroughNode = leftHeight + rightHeight;

        // Maximum diameter is the largest of:
        // 1. Diameter of the left subtree
        // 2. Diameter of the right subtree
        // 3. Diameter passing through the current node
        const currentDiameter = Math.max(leftDiameter, rightDiameter, diameterThroughNode);

        return [currentHeight, currentDiameter];
    }

    // Call the helper function and return the diameter
    const [, diameter] = calculateHeightAndDiameter(root);
    return diameter;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Diameter of the binary tree:", diameterOfBinaryTree(root)); // Output: 3
      1
     / \
    2   3
   / \
  4   5
