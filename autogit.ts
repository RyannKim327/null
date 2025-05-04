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

        const calculateHeight = (node: TreeNode | null): number => {
            if (node === null) {
                return 0;
            }

            // Recursively find the height of the left and right subtrees
            const leftHeight = calculateHeight(node.left);
            const rightHeight = calculateHeight(node.right);

            // Update the diameter if the path through this node is larger
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            // Return the height of this subtree
            return Math.max(leftHeight, rightHeight) + 1;
        };

        calculateHeight(this.root);
        return maxDiameter;
    }
}

// Usage example:
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log("Diameter of the binary tree:", tree.diameter()); // Should print the diameter
