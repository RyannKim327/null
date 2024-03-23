// Node class to represent a node in the AVL tree
class Node {
    constructor(value) {
        this.value = value;
        this.height = 1; // height of the node
        this.left = null; // reference to the left child node
        this.right = null; // reference to the right child node
    }
}

// AVL tree class
class AVLTree {
    constructor() {
        this.root = null; // root node of the AVL tree
    }

    // Helper method to get the height of a node
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Helper method to update the height of a node
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Helper method to get the balance factor of a node
    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Helper method to perform left rotation
    leftRotate(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }

    // Helper method to perform right rotation
    rightRotate(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }

    // Method to balance the AVL tree
    balance(node) {
        const balanceFactor = this.getBalanceFactor(node);

        // Left heavy case
        if (balanceFactor > 1) {
            // Left-right case
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.leftRotate(node.left);
            }
            return this.rightRotate(node);
        }

        // Right heavy case
        if (balanceFactor < -1) {
            // Right-left case
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rightRotate(node.right);
            }
            return this.leftRotate(node);
        }

        return node;
    }

    // Method to insert a value into the AVL tree
    insert(value, node = this.root) {
        if (node === null) {
            this.root = new Node(value);
            return this.root;
        }

        if (value < node.value) {
            node.left = this.insert(value, node.left);
        } else {
            node.right = this.insert(value, node.right);
        }

        this.updateHeight(node);
        return this.balance(node);
    }

    // Method to perform inorder traversal of the AVL tree
    inorder(node = this.root) {
        if (node === null) {
            return [];
        }

        const result = [];
        result.push(...this.inorder(node.left));
        result.push(node.value);
        result.push(...this.inorder(node.right));

        return result;
    }
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(3);
avlTree.insert(7);

console.log(avlTree.inorder()); // Output: [3, 5, 7, 10, 15]
