class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to calculate sum of all nodes in a binary tree using depth-first traversal
function calculateSum(root) {
    if (root === null) {
        return 0;
    }

    return root.value + calculateSum(root.left) + calculateSum(root.right);
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the sum
const totalSum = calculateSum(root);
console.log(totalSum); // Output should be 28 for the provided example tree
