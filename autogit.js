// AVL Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// AVL Tree
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Helper function to calculate the height of a node
    getHeight(node) {
        if (node === null) return 0;
        return node.height;
    }

    // Helper function to update the height of a node
    updateHeight(node) {
        if (node === null) return;
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Helper function to get the balance factor of a node
    getBalanceFactor(node) {
        if (node === null) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotation
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Left rotation
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Insert a key in the AVL Tree
    insert(key) {
        this.root = this._insert(this.root, key);
    }

    _insert(node, key) {
        if (node === null) {
            return new Node(key);
        }

        if (key < node.data) {
            node.left = this._insert(node.left, key);
        } else if (key > node.data) {
            node.right = this._insert(node.right, key);
        } else {
            return node;
        }

        this.updateHeight(node);

        const balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && key < node.left.data) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && key > node.right.data) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && key > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && key < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // Inorder traversal of the AVL Tree
    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node !== null) {
            this._inorder(node.left);
            console.log(node.data);
            this._inorder(node.right);
        }
    }
}

// Example Usage
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

avlTree.inorder();
