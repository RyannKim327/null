class Node {
    constructor(value, color, left, right, parent) {
        this.value = value;
        this.color = color; // Red or black
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Utility function to rotate the tree left
    rotateLeft(node) {
        let child = node.right;
        node.right = child.left;
        if (child.left != null) {
            child.left.parent = node;
        }
        child.parent = node.parent;
        if (node.parent == null) {
            this.root = child;
        } else if (node == node.parent.left) {
            node.parent.left = child;
        } else {
            node.parent.right = child;
        }
        child.left = node;
        node.parent = child;
    }

    // Utility function to rotate the tree right
    rotateRight(node) {
        let child = node.left;
        node.left = child.right;
        if (child.right != null) {
            child.right.parent = node;
        }
        child.parent = node.parent;
        if (node.parent == null) {
            this.root = child;
        } else if (node == node.parent.right) {
            node.parent.right = child;
        } else {
            node.parent.left = child;
        }
        child.right = node;
        node.parent = child;
    }

    // Utility function to fix violations after insertion
    fixViolation(node) {
        let parent, grandparent;

        while (node != this.root && node.color !== 'black' && node.parent.color === 'red') {
            parent = node.parent;
            grandparent = parent.parent;

            // Case A: Parent is left child of grandparent
            if (parent === grandparent.left) {
                let uncle = grandparent.right;

                // Case 1: Uncle is red, recoloring only
                if (uncle != null && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    // Case 2: Uncle is black, rotate and continue
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandparent);
                    let tmp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tmp;
                    node = parent;
                }
            } else {
                // Case B: Parent is right child of grandparent
                let uncle = grandparent.left;

                // Case 1: Uncle is red, recoloring only
                if (uncle != null && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    // Case 2: Uncle is black, rotate and continue
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandparent);
                    let tmp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tmp;
                    node = parent;
                }
            }
        }

        this.root.color = 'black';
    }

    // Public function to insert a value into the red-black tree
    insert(value) {
        let newNode = new Node(value, 'red', null, null, null);
        this.insertHelper(this.root, newNode);
    }

    // Helper function to insert a node recursively and fix violations if any
    insertHelper(root, newNode) {
        if (root === null) {
            this.root = newNode;
            this.fixViolation(newNode);
            return;
        }

        if (newNode.value < root.value) {
            if (root.left !== null) {
                this.insertHelper(root.left, newNode);
            } else {
                root.left = newNode;
                newNode.parent = root;
            }
        } else {
            if (root.right !== null) {
                this.insertHelper(root.right, newNode);
            } else {
                root.right = newNode;
                newNode.parent = root;
            }
        }
    }
}

// Usage
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
