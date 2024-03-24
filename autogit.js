class Node {
    constructor(data) {
        this.data = data;
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

    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    insert(data) {
        this.root = this._insert(this.root, data);
    }

    _insert(node, data) {
        if (node === null) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = this._insert(node.left, data);
        } else {
            node.right = this._insert(node.right, data);
        }

        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1 && data < node.left.data) {
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && data > node.right.data) {
            return this.rotateLeft(node);
        }

        if (balanceFactor > 1 && data > node.left.data) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && data < node.right.data) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Other methods like remove, search, and traversal can be implemented here
}

// Usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
