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

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(node) {
        const newRoot = node.left;
        const temp = newRoot.right;

        newRoot.right = node;
        node.left = temp;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    rotateLeft(node) {
        const newRoot = node.right;
        const temp = newRoot.left;

        newRoot.left = node;
        node.right = temp;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
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
        } else {
            node.right = this.insertNode(node.right, value);
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
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        // TODO: Implement node deletion
    }
}
