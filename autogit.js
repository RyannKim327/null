class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const maxDepth = (root) => {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};

// Example Usage
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.right.right = new Node(5);

console.log("Maximum depth of binary tree:", maxDepth(rootNode)); // Output: 3
