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

    insert(value) {
        if (!this.root) {
            this.root = new Node(value, "black");
        } else {
            this.insertNode(this.root, value);
        }
    }

    insertNode(currentNode, value) {
        if (value < currentNode.value) {
            if (currentNode.left) {
                this.insertNode(currentNode.left, value);
            } else {
                currentNode.left = new Node(value, "red");
                currentNode.left.parent = currentNode;
                this.fixTree(currentNode.left);
            }
        } else {
            if (currentNode.right) {
                this.insertNode(currentNode.right, value);
            } else {
                currentNode.right = new Node(value, "red");
                currentNode.right.parent = currentNode;
                this.fixTree(currentNode.right);
            }
        }
    }

    fixTree(node) {
        while (node !== this.root && node.color !== "black" && node.parent.color === "red") {
            const parent = node.parent;
            const grandparent = node.parent.parent;

            if (parent === grandparent.left) {
                const uncle = grandparent.right;

                if (uncle && uncle.color === "red") {
                    grandparent.color = "red";
                    parent.color = "black";
                    uncle.color = "black";
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    this.rotateRight(grandparent);
                    const tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            } else {
                // Symmetric case for when parent is grandparent's right child
            }
        }

        this.root.color = "black";
    }

    rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;

        if (rightChild.left) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (!node.parent) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    rotateRight(node) {
        // Symmetric to rotateLeft
    }
}
