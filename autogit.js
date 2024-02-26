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
        this.root = this._insertRec(this.root, value);
    }

    _insertRec(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertRec(node.right, value);
        } else {
            return node; // Duplicate values not allowed
        }

        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

        let balance = this._getBalance(node);

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

    _getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    _getBalance(node) {
        if (node === null) {
            return 0;
        }
        return this._getHeight(node.left) - this._getHeight(node.right);
    }

    _rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));
        x.height = 1 + Math.max(this._getHeight(x.left), this._getHeight(x.right));

        return x;
    }

    _rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = 1 + Math.max(this._getHeight(x.left), this._getHeight(x.right));
        y.height = 1 + Math.max(this._getHeight(y.left), this._getHeight(y.right));

        return y;
    }
}

// Example usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
