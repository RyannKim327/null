class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sumOfNodes(root) {
    if (root === null) {
        return 0;
    }

    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example of creating a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the sum of all nodes
const sum = sumOfNodes(root);
console.log("Sum of all nodes in the binary tree is: " + sum);
