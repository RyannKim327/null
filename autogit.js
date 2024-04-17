class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    getLeafNodeCount() {
        return this.countLeafNodes(this.root);
    }

    countLeafNodes(node) {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return 1;
        }
        return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
    }
}

// Example tree
const tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log(tree.getLeafNodeCount()); // Output: 4
