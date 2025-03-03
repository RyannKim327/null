// Define the structure of a binary tree node
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

// Function to sum all nodes of the binary tree
function sumOfNodes(root: TreeNode | null): number {
    // If the node is null, return 0
    if (root === null) {
        return 0;
    }
    // Recursively sum the left and right subtrees and add the current node's value
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example usage:
// Creating a simple binary tree
/*
       1
      / \
     2   3
    / \
   4   5
*/
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculating the sum of all nodes
const totalSum = sumOfNodes(root);
console.log(totalSum); // Output: 15
