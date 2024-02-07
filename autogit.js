// Define a Node class to represent a binary tree node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }
    
    // Base case: if the node is a leaf, return 1
    if (root.left === null && root.right === null) {
        return 1;
    }
    
    // Recursive case: count the leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

// Count the number of leaf nodes in the tree
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
