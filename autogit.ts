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

    function depth(node: TreeNode | null): number {
        if (!node) return 0;

        // Recursively find the depth of the left and right subtrees
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update the diameter if the path through the root is larger
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the depth of this node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root); // Start DFS from the root
    return diameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
