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
        this.root = this.insertRecursive(this.root, value);
    }

    insertRecursive(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertRecursive(node.left, value);
        } else {
            node.right = this.insertRecursive(node.right, value);
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

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

    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        return y;
    }
}

// Usage
let avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);

console.log(avlTree.root.value); // Output: 20
console.log(avlTree.root.left.value); // Output: 10
console.log(avlTree.root.right.value); // Output: 30
