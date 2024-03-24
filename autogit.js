class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(node) {
    if (!node) {
        return 0;
    }
    
    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Example binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Maximum depth of the binary tree is: " + maxDepth(root));
