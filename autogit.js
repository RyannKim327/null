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
        if (node === null) {
            return;
        }
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    rightRotate(y) {
        let x = y.left;
        let T = x.right;

        x.right = y;
        y.left = T;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T = y.left;

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
        } else {
            node.right = this._insert(node.right, value);
        }

        this.updateHeight(node);

        let balanceFactor = this.getBalanceFactor(node);

        // Left Case
        if (balanceFactor > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        // Right Case
        if (balanceFactor < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        // Left-Right Case
        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right-Left Case
        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }
}

// Usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree);
