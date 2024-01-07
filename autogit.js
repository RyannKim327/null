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

    // Recursively calculate the sum of the left and right subtrees
    const leftSum = sumBinaryTree(root.left);
    const rightSum = sumBinaryTree(root.right);

    // Return the sum of the current node's value and the sums of its subtrees
    return root.value + leftSum + rightSum;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(sumBinaryTree(root));  // Output: 15 (1 + 2 + 3 + 4 + 5)
