class Node {
    constructor(val) {
        this.val = val;
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

    rotateRight(y) {
        let x = y.left;
        let T = x.right;

        x.right = y;
        y.left = T;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T = y.left;

        y.left = x;
        x.right = T;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(node, val) {
        if (node === null) {
            return new Node(val);
        }

        if (val < node.val) {
            node.left = this.insert(node.left, val);
        } else {
            node.right = this.insert(node.right, val);
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        let balance = this.getBalanceFactor(node);

        if (balance > 1 && val < node.left.val) {
            return this.rotateRight(node);
        }

        if (balance < -1 && val > node.right.val) {
            return this.rotateLeft(node);
        }

        if (balance > 1 && val > node.left.val) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if (balance < -1 && val < node.right.val) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insertValue(val) {
        this.root = this.insert(this.root, val);
    }

    preOrder(node) {
        if (node !== null) {
            console.log(node.val);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    printPreOrder() {
        this.preOrder(this.root);
    }
}

// Usage
let avl = new AVLTree();
avl.insertValue(30);
avl.insertValue(20);
avl.insertValue(40);
avl.printPreOrder();
