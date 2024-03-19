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

    rotateRight(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    rotateLeft(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    rebalance(node) {
        this.updateHeight(node);

        if (this.getBalanceFactor(node) > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }
        if (this.getBalanceFactor(node) < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    insert(value) {
        this.root = this.insertRec(this.root, value);
    }

    insertRec(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertRec(node.left, value);
        } else {
            node.right = this.insertRec(node.right, value);
        }

        return this.rebalance(node);
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }
}

// Usage
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

avlTree.inorder(avlTree.root);
