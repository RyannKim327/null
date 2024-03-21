class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get the height of the node
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Update the height of the node based on the children's heights
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Get the balance factor of the node
    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotation
    rotateRight(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }

    // Left rotation
    rotateLeft(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }

    // Balance the tree after insertion or deletion
    balance(node) {
        if (this.getBalanceFactor(node) > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }
        if (this.getBalanceFactor(node) < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }
        return node;
    }

    // Insert a value into the tree
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node === null) {
            return new Node(value);
        }
        
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else {
            node.right = this._insert(node.right, value);
        }
        
        this.updateHeight(node);
        return this.balance(node);
    }

    // Delete a value from the tree
    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if (node.left === null || node.right === null) {
                node = node.left || node.right;
            } else {
                let temp = this.findMin(node.right);
                node.value = temp.value;
                node.right = this._delete(node.right, temp.value);
            }
        }

        if (node === null) {
            return null;
        }

        this.updateHeight(node);
        return this.balance(node);
    }

    // Helper function to find the node with minimum value in a subtree
    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // In-order traversal
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Pre-order traversal
    preOrder(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Post-order traversal
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}

// Example Usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.delete(20);
avlTree.inOrder(avlTree.root);
