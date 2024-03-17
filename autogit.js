class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to calculate the sum of all nodes in a binary tree
function sumOfNodes(root) {
    if (root === null) {
        return 0;
    }
    
    let sum = root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
    return sum;
}

// Example binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the sum of all nodes
let result = sumOfNodes(root);
console.log("Sum of all nodes in the binary tree: " + result);
