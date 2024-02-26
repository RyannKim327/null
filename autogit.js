class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    getMax(a, b) {
        return a > b ? a : b;
    }

    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = this.getMax(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = this.getMax(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = this.getMax(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = this.getMax(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        // Perform standard BST insertion
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node; // Duplicate keys not allowed
        }

        // Update height of this ancestor node
        node.height = 1 + this.getMax(this.getHeight(node.left), this.getHeight(node.right));

        // Get the balance factor of this ancestor node to check whether this node became unbalanced
        let balanceFactor = this.getBalanceFactor(node);

        // If the node becomes unbalanced, there are 4 cases

        // Left Left Case
        if (balanceFactor > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balanceFactor < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Helper function to print the AVL tree in-order
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(15);
avlTree.insert(25);

avlTree.inOrderTraversal(avlTree.root);
