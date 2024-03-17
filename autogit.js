// Define the node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Define the binary tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Recursive function to insert a new node in the tree
    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    // Method to insert a new node in the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
}

// Usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
