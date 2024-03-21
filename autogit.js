// Node class to represent each node in the red-black tree
class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color; // Red or black
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// RedBlackTree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the tree
    insert(value) {
        let newNode = new Node(value, 'red');
        if (!this.root) {
            this.root = newNode;
            this.root.color = 'black';
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively insert a new node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

// Test the RedBlackTree class
let tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
console.log(tree);
