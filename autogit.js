class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = 'red'; // New nodes are always red by default
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        this.root = this._insertNode(this.root, newNode);
        this.root.color = 'black'; // Root is always black
    }

    _insertNode(root, newNode) {
        if (!root) {
            return newNode;
        }

        if (newNode.value < root.value) {
            root.left = this._insertNode(root.left, newNode);
        } else {
            root.right = this._insertNode(root.right, newNode);
        }

        // Perform rotation and recoloring
        if (this._isRed(root.right) && !this._isRed(root.left)) {
            root = this._rotateLeft(root);
        }
        if (this._isRed(root.left) && this._isRed(root.left.left)) {
            root = this._rotateRight(root);
        }
        if (this._isRed(root.left) && this._isRed(root.right)) {
            this._flipColors(root);
        }

        return root;
    }

    _isRed(node) {
        if (!node) {
            return false; // Null nodes are black
        }
        return node.color === 'red';
    }

    _rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        newRoot.color = node.color;
        node.color = 'red';
        return newRoot;
    }

    _rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        newRoot.color = node.color;
        node.color = 'red';
        return newRoot;
    }

    _flipColors(node) {
        node.color = 'red';
        node.left.color = 'black';
        node.right.color = 'black';
    }
}

// Usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(15);
rbTree.insert(3);
rbTree.insert(7);
