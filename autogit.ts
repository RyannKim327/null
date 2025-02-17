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
    let maxDiameter = 0;

    function depth(node: TreeNode | null): number {
        if (!node) return 0;

        // Recursively find the depths of the left and right subtrees.
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update the maximum diameter found so far.
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        // Return the depth of the current node.
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);
    return maxDiameter;
}

// Example usage:
// Creating a simple binary tree:
//         1
//        / \
//       2   3
//      / \
//     4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3 (for the path 4 -> 2 -> 1 -> 3)
