class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sumBinaryTree(root) {
    if (!root) {
        return 0;
    }

    let sum = root.value;

    if (root.left) {
        sum += sumBinaryTree(root.left);
    }

    if (root.right) {
        sum += sumBinaryTree(root.right);
    }

    return sum;
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const totalSum = sumBinaryTree(root);
console.log(totalSum);
