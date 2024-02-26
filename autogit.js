class AVLNode {
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

    // Helper function to get the height of a node
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Helper function to update the height of a node
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Helper function to perform a right rotation
    rotateRight(y) {
        let x = y.left;
        let T = x.right;

        x.right = y;
        y.left = T;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Helper function to perform a left rotation
    rotateLeft(x) {
        let y = x.right;
        let T = y.left;

        y.left = x;
        x.right = T;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Get the balance factor of a node
    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Insert a new node into the AVL tree
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (node === null) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        this.updateHeight(node);

        let balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }
}

// Example usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
