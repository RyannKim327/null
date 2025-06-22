// Define the structure of a binary tree node
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Function to calculate the sum of all nodes in a binary tree
function sumOfNodes(root: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }

    // Recursive case: sum the current node's value with the sums of left and right subtrees
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example Usage
const tree = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5)
    ), 
    new TreeNode(3, 
        new TreeNode(6), 
        new TreeNode(7)
    )
);

console.log("Sum of all nodes:", sumOfNodes(tree)); // Output: 28
