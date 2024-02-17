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

    sumOfNodes(node) {
        if (node === null) {
            return 0;
        }
        return node.value + this.sumOfNodes(node.left) + this.sumOfNodes(node.right);
    }

    // Helper method to calculate the sum of all nodes in the tree
    getSumOfAllNodes() {
        return this.sumOfNodes(this.root);
    }
}

// Example usage
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

const sum = tree.getSumOfAllNodes();
console.log("Sum of all nodes in the binary tree:", sum);
