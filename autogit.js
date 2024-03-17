// Node class for AVL Tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// AVL Tree class
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get height of node
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Calculate height difference of left and right subtree
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Update the height of the node
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Perform right rotation
    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;
        
        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Perform left rotation
    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;
        
        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Insert a new node in the AVL Tree
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
            // Duplicate values are not allowed
            return node;
        }

        // Update height of the current node
        this.updateHeight(node);

        // Check balance factor to see if rotation is required
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

// Example Usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
