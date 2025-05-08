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

    // Method to calculate the diameter
    diameter(): number {
        let maxDiameter = 0;

        const height = (node: TreeNode | null): number => {
            if (node === null) {
                return 0;
            }

            // Recursively find the height of left and right subtrees
            const leftHeight = height(node.left);
            const rightHeight = height(node.right);

            // Update the maximum diameter
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            // Return the height of this node
            return Math.max(leftHeight, rightHeight) + 1;
        };

        height(this.root);
        return maxDiameter;
    }
}

// Example Usage
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(tree.diameter()); // Output: 4, which represents the path [4, 2, 1, 3] or [5, 2, 1, 3]
