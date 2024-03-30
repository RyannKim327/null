class Node {
    constructor(key) {
        this.key = key;
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

    // Helper function to get the balance factor of a node
    getBalance(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Helper function to update the height of a node
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Helper function to perform right rotation
    rotateRight(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }

    // Helper function to perform left rotation
    rotateLeft(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }

    // Helper function to balance the subtree rooted at a node
    balance(node) {
        this.updateHeight(node);
        let balanceFactor = this.getBalance(node);

        // Left heavy
        if (balanceFactor > 1) {
            if (this.getBalance(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }

        // Right heavy
        if (balanceFactor < -1) {
            if (this.getBalance(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    insert(key) {
        this.root = this._insert(this.root, key);
    }

    _insert(node, key) {
        if (node === null) {
            return new Node(key);
        }

        if (key < node.key) {
            node.left = this._insert(node.left, key);
        } else {
            node.right = this._insert(node.right, key);
        }

        return this.balance(node);
    }

    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node !== null) {
            this._inorder(node.left);
            console.log(node.key);
            this._inorder(node.right);
        }
    }
}

// Usage example
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(15);
avlTree.insert(5);

avlTree.inorder();
