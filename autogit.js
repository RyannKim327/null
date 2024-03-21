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
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    rotateRight(y) {
        let x = y.left;
        let T = x.right;

        x.right = y;
        y.left = T;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T = y.left;

        y.left = x;
        x.right = T;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node;
        }

        this.updateHeight(node);

        let balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }
}

// Example Usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree.root);
