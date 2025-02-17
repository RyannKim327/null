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

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    diameter(): number {
        let maxDiameter = 0;

        const calculateDepth = (node: TreeNode | null): number => {
            if (!node) {
                return 0;
            }

            // Recursively compute the depth of the left and right subtree
            const leftDepth = calculateDepth(node.left);
            const rightDepth = calculateDepth(node.right);

            // Update the maximum diameter
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            // Return the depth of the current node
            return 1 + Math.max(leftDepth, rightDepth);
        };

        calculateDepth(this.root);
        return maxDiameter;
    }
}

// Example usage
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(tree.diameter()); // Output will be the diameter of the binary tree
