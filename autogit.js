class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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

console.log("Number of leaf nodes:", countLeafNodes(root)); // Output should be 4
