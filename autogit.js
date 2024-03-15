// Define the structure of a binary tree node
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
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1;
    }

    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Construct a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);

// Call the function to count the number of leaf nodes
let leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes in the binary tree: " + leafNodeCount);
