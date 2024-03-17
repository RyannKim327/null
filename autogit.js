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

    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;
        return newRoot;
    }

    rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;
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

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balance = this.getBalanceFactor(node);

        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }
}
