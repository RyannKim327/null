class RBNode {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new RBNode(value, "red");
        this.root = this.insertNode(this.root, newNode);
        this.root.color = "black";
    }

    insertNode(node, newNode) {
        if (node === null) return newNode;

        if (newNode.value < node.value) {
            node.left = this.insertNode(node.left, newNode);
            node.left.parent = node;
        } else if (newNode.value > node.value) {
            node.right = this.insertNode(node.right, newNode);
            node.right.parent = node;
        }

        if (node.left && node.left.color === "red" && node.right && node.right.color === "red") {
            if (node.left.left && node.left.left.color === "red") {
                node = this.rotateRight(node);
            } else {
                node = this.rotateLeftRight(node);
            }
        }

        if (node.parent) {
            if (node === node.parent.left) {
                if (node.color === "red" && node.parent.left.color === "red") {
                    if (node.parent.right && node.parent.right.color === "red") {
                        node.parent.color = "red";
                        node.parent.left.color = "black";
                        node.parent.right.color = "black";
                    }
                }
            } else {
                if (node.color === "red" && node.parent.right.color === "red") {
                    if (node.parent.left && node.parent.left.color === "red") {
                        node.parent.color = "red";
                        node.parent.left.color = "black";
                        node.parent.right.color = "black";
                    }
                }
            }
        }

        return node;
    }

    rotateLeft(node) {
        const temp = node.right;
        node.right = temp.left;
        if (temp.left) {
            temp.left.parent = node;
        }
        temp.parent = node.parent;
        if (!node.parent) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }
        temp.left = node;
        node.parent = temp;
        return temp;
    }

    rotateRight(node) {
        const temp = node.left;
        node.left = temp.right;
        if (temp.right) {
            temp.right.parent = node;
        }
        temp.parent = node.parent;
        if (!node.parent) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }
        temp.right = node;
        node.parent = temp;
        return temp;
    }

    rotateLeftRight(node) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
    }

    rotateRightLeft(node) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
    }
}
