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
        let newNode = new Node(value, 'red');
        if (this.root === null) {
            this.root = newNode;
            this.root.color = 'black';
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
        this.fixViolations(newNode);
    }

    fixViolations(node) {
        while (node !== this.root && node.color !== 'black' && node.parent.color === 'red') {
            let parent = node.parent;
            let grandparent = parent.parent;
            if (parent === grandparent.left) {
                let uncle = grandparent.right;
                if (uncle !== null && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandparent);
                    let temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            } else {
                let uncle = grandparent.left;
                if (uncle !== null && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandparent);
                    let temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            }
        }
        this.root.color = 'black';
    }

    rotateLeft(node) {
        let rightNode = node.right;
        node.right = rightNode.left;
        if (rightNode.left !== null) {
            rightNode.left.parent = node;
        }
        rightNode.parent = node.parent;
        if (node.parent === null) {
            this.root = rightNode;
        } else if (node === node.parent.left) {
            node.parent.left = rightNode;
        } else {
            node.parent.right = rightNode;
        }
        rightNode.left = node;
        node.parent = rightNode;
    }

    rotateRight(node) {
        let leftNode = node.left;
        node.left = leftNode.right;
        if (leftNode.right !== null) {
            leftNode.right.parent = node;
        }
        leftNode.parent = node.parent;
        if (node.parent === null) {
            this.root = leftNode;
        } else if (node === node.parent.right) {
            node.parent.right = leftNode;
        } else {
            node.parent.left = leftNode;
        }
        leftNode.right = node;
        node.parent = leftNode;
    }
}
