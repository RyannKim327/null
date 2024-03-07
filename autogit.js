class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Left rotation
    rotateLeft(node) {
        let right = node.right;
        node.right = right.left;
        if (right.left) right.left.parent = node;
        right.parent = node.parent;
        if (!node.parent) this.root = right;
        else if (node === node.parent.left) node.parent.left = right;
        else node.parent.right = right;
        right.left = node;
        node.parent = right;
    }

    // Right rotation
    rotateRight(node) {
        let left = node.left;
        node.left = left.right;
        if (left.right) left.right.parent = node;
        left.parent = node.parent;
        if (!node.parent) this.root = left;
        else if (node === node.parent.right) node.parent.right = left;
        else node.parent.left = left;
        left.right = node;
        node.parent = left;
    }

    // Insert a value into the red-black tree
    insert(value) {
        let newNode = new Node(value, 'red');
        this._insertNode(newNode);
        this.fixInsert(newNode);
    }

    _insertNode(newNode) {
        let parent = null;
        let current = this.root;

        while (current !== null) {
            parent = current;
            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;
        if (parent === null) {
            this.root = newNode;
        } else if (newNode.value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
    }

    fixInsert(node) {
        while (node !== this.root && node.parent.color === 'red') {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle && uncle.color === 'red') {
                    node.parent.color = 'black';
                    uncle.color = 'black';
                    node.parent.parent.color = 'red';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = 'black';
                    node.parent.parent.color = 'red';
                    this.rotateRight(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                if (uncle && uncle.color === 'red') {
                    node.parent.color = 'black';
                    uncle.color = 'black';
                    node.parent.parent.color = 'red';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = 'black';
                    node.parent.parent.color = 'red';
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = 'black';
    }
}

// Usage
let tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
