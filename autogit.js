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
        return node ? node.height : 0;
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    getBalanceFactor(node) {
        return this.getHeight(node.right) - this.getHeight(node.left);
    }

    rotateRight(y) {
        const x = y.left;
        const T = x.right;

        x.right = y;
        y.left = T;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const T = y.left;

        y.left = x;
        x.right = T;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    insert(value) {
        this.root = this.insertRecursive(this.root, value);
    }

    insertRecursive(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertRecursive(node.left, value);
        } else {
            node.right = this.insertRecursive(node.right, value);
        }

        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        if (balanceFactor < -1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        if (balanceFactor > 1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        if (balanceFactor < -1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        return node;
    }
}

// Usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
