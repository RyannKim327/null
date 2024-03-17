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

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _height(node) {
        if (node === null) {
            return 0;
        }

        return node.height;
    }

    _updateHeight(node) {
        node.height = 1 + Math.max(this._height(node.left), this._height(node.right));
    }

    _balanceFactor(node) {
        return this._height(node.left) - this._height(node.right);
    }

    _rotateRight(y) {
        let x = y.left;
        let T = x.right;

        x.right = y;
        y.left = T;

        this._updateHeight(y);
        this._updateHeight(x);

        return x;
    }

    _rotateLeft(x) {
        let y = x.right;
        let T = y.left;

        y.left = x;
        x.right = T;

        this._updateHeight(x);
        this._updateHeight(y);

        return y;
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
            return node; // Duplicate values not allowed
        }

        this._updateHeight(node);

        let balance = this._balanceFactor(node);

        if (balance > 1 && value < node.left.value) {
            return this._rotateRight(node);
        }

        if (balance < -1 && value > node.right.value) {
            return this._rotateLeft(node);
        }

        if (balance > 1 && value > node.left.value) {
            node.left = this._rotateLeft(node.left);
            return this._rotateRight(node);
        }

        if (balance < -1 && value < node.right.value) {
            node.right = this._rotateRight(node.right);
            return this._rotateLeft(node);
        }

        return node;
    }
}
