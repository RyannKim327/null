// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Function to calculate the sum of all nodes in a binary tree
function sumOfNodes(root) {
    if (root === null) {
        return 0;
    }
    
    return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the sum of all nodes
let sum = sumOfNodes(root);
console.log("Sum of all nodes in the binary tree: " + sum);
