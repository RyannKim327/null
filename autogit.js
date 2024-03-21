class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateTreeSum(root) {
    if (!root) {
        return 0;
    }

    return root.value + calculateTreeSum(root.left) + calculateTreeSum(root.right);
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const sum = calculateTreeSum(root);
console.log("Sum of all nodes in the binary tree: " + sum);
