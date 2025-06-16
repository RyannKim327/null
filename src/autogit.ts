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
    private diameter: number = 0;

    public getDiameter(root: TreeNode | null): number {
        this.calculateHeight(root);
        return this.diameter;
    }

    private calculateHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        // Recursively find the height of the left and right subtrees
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);

        // Update the diameter if the path through this node is larger
        this.diameter = Math.max(this.diameter, leftHeight + rightHeight);

        // Return the height of the tree rooted at this node
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const binaryTree = new BinaryTree();
console.log("Diameter of the binary tree:", binaryTree.getDiameter(root)); // Output: 3
