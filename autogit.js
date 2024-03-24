class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = "red"; // New nodes are always red
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper method to perform left rotation
    rotateLeft(node) {
        let right = node.right;
        node.right = right.left;
        if (right.left) {
            right.left.parent = node;
        }
        right.parent = node.parent;
        if (!node.parent) {
            this.root = right;
        } else if (node === node.parent.left) {
            node.parent.left = right;
        } else {
            node.parent.right = right;
        }
        right.left = node;
        node.parent = right;
    }

    // Helper method to perform right rotation
    rotateRight(node) {
        let left = node.left;
        node.left = left.right;
        if (left.right) {
            left.right.parent = node;
        }
        left.parent = node.parent;
        if (!node.parent) {
            this.root = left;
        } else if (node === node.parent.right) {
            node.parent.right = left;
        } else {
            node.parent.left = left;
        }
        left.right = node;
        node.parent = left;
    }

    insert(value) {
        let newNode = new Node(value);
        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            parentNode = currentNode;
            if (newNode.value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        newNode.parent = parentNode;
        if (!parentNode) {
            this.root = newNode;
            this.root.color = "black";
        } else if (newNode.value < parentNode.value) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;
        }

        this.fixInsert(newNode);
    }

    fixInsert(node) {
        while (node !== this.root && node.parent.color === "red") {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle && uncle.color === "red") {
                    node.parent.color = "black";
                    uncle.color = "black";
                    node.parent.parent.color = "red";
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = "black";
                    node.parent.parent.color = "red";
                    this.rotateRight(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                if (uncle && uncle.color === "red") {
                    node.parent.color = "black";
                    uncle.color = "black";
                    node.parent.parent.color = "red";
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = "black";
                    node.parent.parent.color = "red";
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = "black";
    }
}
