// Definition for a binary tree node.
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

// Function to calculate the sum of all nodes in the binary tree.
function sumOfNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;  // Base case: If the node is null, return 0.
    }

    // Recursively calculate the sums of left and right subtrees, and add the current node's value.
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const totalSum = sumOfNodes(root);
console.log(totalSum);  // Output: 15
