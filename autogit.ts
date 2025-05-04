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

    // Function to calculate diameter
    diameterOfBinaryTree(): number {
        let maxDiameter = 0;

        const height = (node: TreeNode | null): number => {
            if (!node) return 0;

            const leftHeight = height(node.left);
            const rightHeight = height(node.right);

            // Update the maximum diameter
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            // Return the height of the current node
            return Math.max(leftHeight, rightHeight) + 1;
        };

        height(this.root); // Start height calculation from the root
        return maxDiameter; // The max diameter found
    }
}

// Example usage:
// Creating a binary tree: 
//       1
//      / \
//     2   3
//    / \
//   4   5
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(tree.diameterOfBinaryTree()); // Output: 4 (which is the path 4 -> 2 -> 1 -> 3)
