// Define a simple binary tree node structure
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Function to calculate the sum of all nodes in a binary tree
function calculateSum(root) {
    if (root === null) {
        return 0;
    }
    
    return root.value + calculateSum(root.left) + calculateSum(root.right);
}

// Create a sample binary tree
const tree = new Node(1,
    new Node(2,
        new Node(4),
        new Node(5)
    ),
    new Node(3,
        new Node(6),
        new Node(7)
    )
);

// Calculate the sum of all nodes in the binary tree
const sum = calculateSum(tree);

// Output the sum
console.log("The sum of all nodes in the binary tree is: " + sum);
