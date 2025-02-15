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
        return 0; // Base case: if the node is null, return 0
    }
    
    // Recursively sum the values of the left and right subtrees
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const totalSum = sumOfNodes(root);
console.log(`Total sum of all nodes: ${totalSum}`); // Outputs: Total sum of all nodes: 15
