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

    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    rightRotate(y) {
        const x = y.left;
        const T = x.right;

        x.right = y;
        y.left = T;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    leftRotate(x) {
        const y = x.right;
        const T = y.left;

        y.left = x;
        x.right = T;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
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
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            // Duplicate values not allowed
            return node;
        }

        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

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
}
