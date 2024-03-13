class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    sumAllNodes(node) {
        if (node === null) {
            return 0;
        }

        return node.value + this.sumAllNodes(node.left) + this.sumAllNodes(node.right);
    }

    getSumOfAllNodes() {
        return this.sumAllNodes(this.root);
    }
}

// Creating a binary tree
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

const binaryTree = new BinaryTree(node1);

console.log("Sum of all nodes in the binary tree: ", binaryTree.getSumOfAllNodes());
