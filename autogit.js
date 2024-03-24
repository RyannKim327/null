class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 0 for black, 1 for red
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value, 1); // new node is initially red
        if (this.root === null) {
            this.root = newNode;
            this.root.color = 0; // change color to black
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
}

// Test the Red-Black Tree
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(5);
