class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
    if (root === null) {
        return 0; // Base case: empty tree
    }
    if (root.left === null && root.right === null) {
        return 1; // Leaf node
    }
    // Recursively count leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Get the number of leaf nodes in the binary tree
const leafNodeCount = countLeafNodes(root);

console.log("Number of leaf nodes in the binary tree:", leafNodeCount); // Output: 4
