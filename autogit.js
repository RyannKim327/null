// Node class for creating tree nodes
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
    } else {
        return countLeafNodes(root.left) + countLeafNodes(root.right);
    }
}

// Create a sample binary tree
let rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);

// Count the number of leaf nodes
const leafNodeCount = countLeafNodes(rootNode);
console.log("Number of leaf nodes in the binary tree: " + leafNodeCount);
