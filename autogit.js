class Node {
    constructor(data) {
        this.data = data;
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
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Number of leaf nodes: ", countLeafNodes(root)); // Output: 4
