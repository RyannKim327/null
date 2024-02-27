class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countLeafNodes(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.left === null && root.right === null) {
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

// Count the number of leaf nodes in the tree
const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
