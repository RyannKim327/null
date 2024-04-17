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
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

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
            return node;
        }

        this.updateHeight(node);

        let balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }
}
