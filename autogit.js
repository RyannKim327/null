class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function sumTree(root) {
    if (root === null) {
        return 0;
    }

    return root.value + sumTree(root.left) + sumTree(root.right);
}

// Example binary tree
const tree = new Node(1,
    new Node(2,
        new Node(4),
        new Node(5)),
    new Node(3,
        new Node(6),
        new Node(7)
    )
);

const sum = sumTree(tree);
console.log("Sum of all nodes in the binary tree: ", sum);
