class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Function to calculate diameter
    diameter(): number {
        let maxDiameter = 0;

        const calculateHeight = (node: TreeNode | null): number => {
            if (node === null) {
                return 0;
            }

            // Recursive call to get heights of left and right subtrees
            const leftHeight = calculateHeight(node.left);
            const rightHeight = calculateHeight(node.right);

            // Update maximum diameter found
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            // Return height of the current node
            return Math.max(leftHeight, rightHeight) + 1;
        };

        calculateHeight(this.root);
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

console.log("Diameter of the binary tree is:", tree.diameter());
