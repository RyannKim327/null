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

    insert(value) {
        const insertHelper = (node, value) => {
            if (node === null) {
                return new AVLNode(value);
            }

            if (value < node.value) {
                node.left = insertHelper(node.left, value);
            } else {
                node.right = insertHelper(node.right, value);
            }

            this.updateHeight(node);

            const balance = this.getBalanceFactor(node);

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
        };

        this.root = insertHelper(this.root, value);
    }
}

// Example usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
