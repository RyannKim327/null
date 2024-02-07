class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(node) {
    if (node === null) {
        return 0; // Base case: an empty tree has 0 leaf nodes
    }
    
    if (node.left === null && node.right === null) {
        return 1; // Base case: a node with no children is a leaf node
    }
    
    // Recursively count the leaf nodes in the left and right subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);

// Count the number of leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount); // Output: 4
