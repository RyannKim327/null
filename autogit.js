// Define a node class for AVL tree
class Node {
    constructor(key) {
        this.key = key;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

// AVL tree implementation
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get the height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Update the height of a node
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Get balance factor of a node
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotate subtree rooted with node
    rotateRight(node) {
        const newRoot = node.left;
        const temp = newRoot.right;

        newRoot.right = node;
        node.left = temp;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Left rotate subtree rooted with node
    rotateLeft(node) {
        const newRoot = node.right;
        const temp = newRoot.left;

        newRoot.left = node;
        node.right = temp;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Rebalance the AVL tree starting from the given node
    balance(node) {
        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        // Left heavy
        if (balanceFactor > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }
        // Right heavy
        else if (balanceFactor < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    // Insert a key into the AVL tree
    insert(key) {
        this.root = this._insert(this.root, key);
    }

    _insert(node, key) {
        if (!node) {
            return new Node(key);
        }

        if (key < node.key) {
            node.left = this._insert(node.left, key);
        } else {
            node.right = this._insert(node.right, key);
        }

        return this.balance(node);
    }

    // Find the node with minimum key
    findMinNode(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // Delete a key from the AVL tree
    delete(key) {
        this.root = this._delete(this.root, key);
    }

    _delete(node, key) {
        if (!node) {
            return null;
        }

        if (key < node.key) {
            node.left = this._delete(node.left, key);
        } else if (key > node.key) {
            node.right = this._delete(node.right, key);
        } else {
            if (!node.left || !node.right) {
                node = node.left || node.right;
            } else {
                const minRight = this.findMinNode(node.right);
                node.key = minRight.key;
                node.right = this._delete(node.right, minRight.key);
            }
        }

        if (!node) {
            return node;
        }

        return this.balance(node);
    }
}

// Usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(15);
avlTree.delete(20);
