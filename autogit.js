class RedBlackNode {
    constructor(key, color) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // Red is true, Black is false
    }
}

class RedBlackTree {
    constructor() {
        this.NIL = new RedBlackNode(null, false); // Sentinel node
        this.root = this.NIL;
    }

    insert(key) {
        let newNode = new RedBlackNode(key, true); // New node is always red
        newNode.left = this.NIL;
        newNode.right = this.NIL;

        let current = this.root;
        let parent = null;

        while (current !== this.NIL) {
            parent = current;
            if (newNode.key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;
        if (parent === null) {
            this.root = newNode;
        } else if (newNode.key < parent.key) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.fixInsert(newNode);
    }

    fixInsert(node) {
        while (node.parent.color === true) {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;

                if (uncle.color === true) {
                    node.parent.color = false;
                    uncle.color = false;
                    node.parent.parent.color = true;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }

                    node.parent.color = false;
                    node.parent.parent.color = true;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;

                if (uncle.color === true) {
                    node.parent.color = false;
                    uncle.color = false;
                    node.parent.parent.color = true;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }

                    node.parent.color = false;
                    node.parent.parent.color = true;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }

        this.root.color = false;
    }

    rotateLeft(node) {
        let pivot = node.right;
        node.right = pivot.left;

        if (pivot.left !== this.NIL) {
            pivot.left.parent = node;
        }

        pivot.parent = node.parent;

        if (node.parent === null) {
            this.root = pivot;
        } else if (node === node.parent.left) {
            node.parent.left = pivot;
        } else {
            node.parent.right = pivot;
        }

        pivot.left = node;
        node.parent = pivot;
    }

    rotateRight(node) {
        let pivot = node.left;
        node.left = pivot.right;

        if (pivot.right !== this.NIL) {
            pivot.right.parent = node;
        }

        pivot.parent = node.parent;

        if (node.parent === null) {
            this.root = pivot;
        } else if (node === node.parent.right) {
            node.parent.right = pivot;
        } else {
            node.parent.left = pivot;
        }

        pivot.right = node;
        node.parent = pivot;
    }
}

// Usage example
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
