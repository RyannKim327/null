class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sumOfNodes(root) {
    if (root === null) {
        return 0;
    }

    // Recursively calculate the sum of nodes
    let sum = root.value + sumOfNodes(root.left) + sumOfNodes(root.right);

    return sum;
}

// Example binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

let totalSum = sumOfNodes(root);
console.log("Sum of all nodes in the binary tree: " + totalSum);
