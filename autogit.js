class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sumBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    // Perform depth-first traversal using recursion
    const leftSum = sumBinaryTree(root.left);
    const rightSum = sumBinaryTree(root.right);

    // Sum up the values of the current node and its children
    return root.value + leftSum + rightSum;
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Sum of all nodes in the binary tree:", sumBinaryTree(root)); // Output: 28
