class Node {
    constructor(data) {
        this.data = data;
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
        return node ? node.height : 0;
    }

    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(node) {
        const newRoot = node.left;
        const temp = newRoot.right;

        newRoot.right = node;
        node.left = temp;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

        return newRoot;
    }

    rotateLeft(node) {
        const newRoot = node.right;
        const temp = newRoot.left;

        newRoot.left = node;
        node.right = temp;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

        return newRoot;
    }

    insert(node, data) {
        if (!node) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = this.insert(node.left, data);
        } else if (data > node.data) {
            node.right = this.insert(node.right, data);
        } else {
            return node; // duplicate data not allowed
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insertData(data) {
        this.root = this.insert(this.root, data);
    }

    printInOrder(node) {
        if (node) {
            this.printInOrder(node.left);
            console.log(node.data);
            this.printInOrder(node.right);
        }
    }

    printTree() {
        this.printInOrder(this.root);
    }
}

// Example Usage:
const avlTree = new AVLTree();
avlTree.insertData(10);
avlTree.insertData(20);
avlTree.insertData(30);
avlTree.insertData(40);
avlTree.insertData(50);
avlTree.insertData(25);

avlTree.printTree();
