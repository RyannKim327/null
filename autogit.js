function height(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
}
function diameterOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}
// Binary Tree Node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Constructing a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate and output the diameter of the tree
console.log("The diameter of the binary tree is: ", diameterOfBinaryTree(root));
