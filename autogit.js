// Red-Black Tree Node
class Node {
    constructor(data, color) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// Red-Black Tree
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data, "red");
        this.root = this._insertNode(this.root, newNode);
        this.root.color = "black"; // Root must be black
    }

    _insertNode(root, newNode) {
        if (!root) {
            return newNode;
        }

        if (newNode.data < root.data) {
            root.left = this._insertNode(root.left, newNode);
            root.left.parent = root;
        } else if (newNode.data > root.data) {
            root.right = this._insertNode(root.right, newNode);
            root.right.parent = root;
        }

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
            return false;
        }
        return node.color === "red";
    }

    _rotateLeft(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        temp.color = node.color;
        node.color = "red";
        return temp;
    }

    _rotateRight(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        temp.color = node.color;
        node.color = "red";
        return temp;
    }

    _flipColors(node) {
        node.color = "red";
        node.left.color = "black";
        node.right.color = "black";
    }
}

// Usage
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
