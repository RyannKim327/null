class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = color;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertRecursive(this.root, value);
        this.root.color = 'black';
    }

    _insertRecursive(node, value) {
        if (node === null) {
            return new Node(value, 'red');
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

    _isRed(node) {
        if (node === null) {
            return false;
        }
        return node.color === 'red';
    }

    _rotateLeft(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        temp.color = node.color;
        node.color = 'red';
        return temp;
    }

    _rotateRight(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        temp.color = node.color;
        node.color = 'red';
        return temp;
    }

    _flipColors(node) {
        node.color = 'red';
        node.left.color = 'black';
        node.right.color = 'black';
    }
}

// Usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);

console.log(tree);
