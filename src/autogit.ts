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

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Function to calculate the diameter of the binary tree
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;

        const depth = (node: TreeNode | null): number => {
            if (!node) return 0;

            // Recursively find the depth of left and right subtrees
            const leftDepth = depth(node.left);
            const rightDepth = depth(node.right);

            // Update the diameter if the path through this node is larger
            diameter = Math.max(diameter, leftDepth + rightDepth);

            // Return the depth of the current node
            return Math.max(leftDepth, rightDepth) + 1;
        };

        depth(root); // Start the recursion from the root
        return diameter;
    }
}

// Example usage
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(tree.diameterOfBinaryTree(tree.root)); // Output: 3
