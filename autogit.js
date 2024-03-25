class AVLNode {
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
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
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

    insertHelper(node, value) {
        if (node === null) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.insertHelper(node.left, value);
        } else {
            node.right = this.insertHelper(node.right, value);
        }

        this.updateHeight(node);

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

    insert(value) {
        this.root = this.insertHelper(this.root, value);
    }
}

// Usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
