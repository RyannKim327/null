class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = color; // 0 for black, 1 for red
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertRecursive(this.root, value);
        this.root.color = 0; // Ensure root is always black
    }

    _insertRecursive(node, value) {
        if (node === null) {
            return new Node(value, 1); // New nodes are always red
        }

        if (value < node.value) {
            node.left = this._insertRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertRecursive(node.right, value);
        }

        if (this._isRed(node.right) && !this._isRed(node.left)) {
            node = this._rotateLeft(node);
        }
        if (this._isRed(node.left) && this._isRed(node.left.left)) {
            node = this._rotateRight(node);
        }
        if (this._isRed(node.left) && this._isRed(node.right)) {
            this._flipColors(node);
        }

        return node;
    }

    _rotateLeft(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        temp.color = node.color;
        node.color = 1;
        return temp;
    }

    _rotateRight(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        temp.color = node.color;
        node.color = 1;
        return temp;
    }

    _flipColors(node) {
        node.color = 1;
        node.left.color = 0;
        node.right.color = 0;
    }

    _isRed(node) {
        if (node === null) {
            return 0;
        }
        return node.color === 1;
    }
}

// Usage
const rbTree = new RedBlackTree();
rbTree.insert(7);
rbTree.insert(3);
rbTree.insert(18);
rbTree.insert(10);
// Continue inserting more elements...

