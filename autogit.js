class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.color = 'red'; // New nodes are always colored red to start with
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Utility function to perform left rotation
    leftRotate(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    // Utility function to perform right rotation
    rightRotate(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    // Function to fix violations in the tree after insertion
    fixViolation(node) {
        if (node.parent === null) {
            node.color = 'black'; // Root node always black
            return node;
        }

        if (node.parent.color === 'black') {
            return node;
        }

        let parent = node.parent;
        let grandparent = parent.parent;
        let uncle = grandparent.left === parent ? grandparent.right : grandparent.left;

        if (uncle !== null && uncle.color === 'red') {
            parent.color = uncle.color = 'black';
            grandparent.color = 'red';
            return this.fixViolation(grandparent);
        }

        if (parent === grandparent.left) {
            if (node === parent.left) {
                grandparent = this.rightRotate(grandparent);
            } else {
                parent = this.rightRotate(parent);
                grandparent.left = parent;
                grandparent = this.leftRotate(grandparent);
            }
        } else {
            if (node === parent.right) {
                grandparent = this.leftRotate(grandparent);
            } else {
                parent = this.leftRotate(parent);
                grandparent.right = parent;
                grandparent = this.rightRotate(grandparent);
            }
        }

        grandparent.color = 'red';
        grandparent.left.color = grandparent.right.color = 'black';

        if (grandparent.parent === null) {
            this.root = grandparent;
        }

        return grandparent;
    }

    // Function to insert a node into the tree
    insert(data) {
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
            this.root.color = 'black'; // Root node is always black
        } else {
            let current = this.root;
            let parent = null;

            while (current !== null) {
                parent = current;
                current = data < current.data ? current.left : current.right;
            }

            node.parent = parent;
            if (data < parent.data) {
                parent.left = node;
            } else {
                parent.right = node;
            }

            node = this.fixViolation(node); 
        }
    }
}
