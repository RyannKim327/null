// Define a Node class to represent nodes in the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Define a function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
    if (!root) {
        return 0;
    }
    
    if (!root.left && !root.right) {
        return 1;
    }
    
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
root.right.right.right = new Node(8);

// Call the countLeafNodes function with the root of the binary tree
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes in the binary tree: " + leafNodeCount);
