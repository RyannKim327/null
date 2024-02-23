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

    rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        
        this.updateHeight(node);
        this.updateHeight(newRoot);
        
        return newRoot;
    }

    rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);
        
        return newRoot;
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
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            // Duplicate values not allowed
            return node;
        }

        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }
}

// Example usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
