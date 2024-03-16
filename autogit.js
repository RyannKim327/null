// Node class for red-black tree
class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// Red-Black Tree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper functions for rotating nodes
    leftRotate(node) {
        let rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    rightRotate(node) {
        let leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }

    // Fix violations in red-black tree
    fixViolation(node) {
        let parent = null;
        let grandparent = null;

        while (node !== this.root && node.color !== 'black' && node.parent.color === 'red') {
            parent = node.parent;
            grandparent = parent.parent;

            if (parent === grandparent.left) {
                let uncle = grandparent.right;

                if (uncle !== null && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.leftRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rightRotate(grandparent);
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
                        this.rightRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.leftRotate(grandparent);
                    let temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            }
        }

        this.root.color = 'black';
    }

    // Insert a value into the red-black tree
    insert(value) {
        let newNode = new Node(value, 'red');
        if (this.root === null) {
            this.root = newNode;
            this.root.color = 'black';
        } else {
            let current = this.root;
            let parent = null;
            while (current !== null) {
                parent = current;
                if (value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            newNode.parent = parent;
            if (value < parent.value) {
                parent.left = newNode;
            } else {
                parent.right = newNode;
            }
            this.fixViolation(newNode);
        }
    }
}

// Usage
let tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
