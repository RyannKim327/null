class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function findSumOfNodes(root) {
    if (root === null) {
        return 0;
    }
    
    return root.value + findSumOfNodes(root.left) + findSumOfNodes(root.right);
}

// Example binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const sum = findSumOfNodes(root);
console.log("Sum of all nodes in the binary tree:", sum);
