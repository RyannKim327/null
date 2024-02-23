class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateSum(node) {
    if (node === null) {
        return 0;
    }

    return (
        node.value +
        calculateSum(node.left) +
        calculateSum(node.right)
    );
}

// Usage example
// Construct a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

// Calculate the sum of all nodes in the binary tree
let sum = calculateSum(root);
console.log("Sum of all nodes in the binary tree: " + sum); // Output: 10
