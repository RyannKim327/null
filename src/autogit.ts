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
    // Helper function to calculate both height and diameter
    function calculateHeightAndDiameter(node: TreeNode | null): { height: number, diameter: number } {
        if (node === null) {
            return { height: 0, diameter: 0 }; // Base case: empty tree
        }

        // Recursively calculate height and diameter for left and right subtrees
        const left = calculateHeightAndDiameter(node.left);
        const right = calculateHeightAndDiameter(node.right);

        // Height of the current node is 1 + max(height of left subtree, height of right subtree)
        const height = 1 + Math.max(left.height, right.height);

        // Diameter of the current node is the maximum of:
        // 1. Diameter of the left subtree
        // 2. Diameter of the right subtree
        // 3. Longest path passing through the current node (left.height + right.height)
        const diameter = Math.max(
            left.diameter,
            right.diameter,
            left.height + right.height
        );

        return { height, diameter };
    }

    // Call the helper function and return the diameter
    return calculateHeightAndDiameter(root).diameter;
}
// Constructing a binary tree
//       1
//      / \
//     2   3
//    / \     
//   4   5    
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter of the binary tree
console.log(diameterOfBinaryTree(root)); // Output: 3
