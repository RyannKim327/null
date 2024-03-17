class Node {
    constructor(key, color) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node(key, 'red');
        if (!this.root) {
            this.root = newNode;
            this.root.color = 'black';
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Other operations like rotation and balancing can be implemented here
}
