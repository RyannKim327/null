// Define a Node class to represent the nodes of the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to find the height of a tree
function height(node) {
    if (node === null) {
        return 0;
    }

    return 1 + Math.max(height(node.left), height(node.right));
}

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example: Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output the diameter of the binary tree
