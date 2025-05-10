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
function sumOfNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: if the node is null, its contribution to sum is 0
    }

    // Recursive case: node's value + sum of left child + sum of right child
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}
// Example usage:

// Create the binary tree
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// Calculate the sum of all nodes
const totalSum = sumOfNodes(root);
console.log(`The sum of all nodes in the binary tree is: ${totalSum}`);
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

function sumOfNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example usage
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

const totalSum = sumOfNodes(root);
console.log(`The sum of all nodes in the binary tree is: ${totalSum}`);
