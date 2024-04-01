class Node {
    constructor(value) {
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
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

    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    rightRotate(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    leftRotate(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else {
            node.right = this._insert(node.right, value);
        }

        this.updateHeight(node);

        let balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        if (balanceFactor < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node === null) {
            return;
        }

        this._inorder(node.left);
        console.log(node.value);
        this._inorder(node.right);
    }
}

// Test AVL Tree
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(15);
avlTree.insert(5);

avlTree.inorder();
