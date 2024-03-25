class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color || 'red';
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        this.root = this.insertNode(this.root, newNode);
        this.root.color = 'black';
    }

    insertNode(root, newNode) {
        if (!root) {
            return newNode;
        }

        if (newNode.value < root.value) {
            root.left = this.insertNode(root.left, newNode);
            root.left.parent = root;
        } else if (newNode.value > root.value) {
            root.right = this.insertNode(root.right, newNode);
            root.right.parent = root;
        }

        if (this.isRed(root.right) && !this.isRed(root.left)) {
            root = this.rotateLeft(root);
        }
        if (this.isRed(root.left) && this.isRed(root.left.left)) {
            root = this.rotateRight(root);
        }
        if (this.isRed(root.left) && this.isRed(root.right)) {
            this.flipColors(root);
        }

        return root;
    }

    isRed(node) {
        if (!node) return false;
        return node.color === 'red';
    }

    rotateLeft(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        temp.color = node.color;
        node.color = 'red';
        return temp;
    }

    rotateRight(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        temp.color = node.color;
        node.color = 'red';
        return temp;
    }

    flipColors(node) {
        node.color = 'red';
        node.left.color = 'black';
        node.right.color = 'black';
    }
}
