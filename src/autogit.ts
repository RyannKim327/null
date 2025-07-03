// Define the structure of a tree node
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

// Function to calculate the sum of all nodes in the binary tree
function sumOfNodes(root: TreeNode | null): number {
    // Base case: If the node is null, return 0
    if (root === null) {
        return 0;
    }

    // Recursive case: Return the sum of the current node value and the sums of the left and right subtrees
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example of using the above code
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const totalSum = sumOfNodes(root);
console.log(`The sum of all nodes in the binary tree is: ${totalSum}`); // Output: 15
