class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Insert a node into the AVL tree
    insert(data) {
        this.root = this._insertNode(this.root, data);
    }

    // Recursive function to insert a node in the AVL tree
    _insertNode(node, data) {
        if (node === null) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = this._insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this._insertNode(node.right, data);
        } else {
            // Duplicate keys are not allowed
            return node;
        }

        // Update height of the current node
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

        // Check if the node is balanced and perform rotations if necessary
        const balanceFactor = this._getBalanceFactor(node);

        if (balanceFactor > 1 && data < node.left.data) {
            return this._rotateRight(node);
        }
        if (balanceFactor < -1 && data > node.right.data) {
            return this._rotateLeft(node);
        }
        if (balanceFactor > 1 && data > node.left.data) {
            node.left = this._rotateLeft(node.left);
            return this._rotateRight(node);
        }
        if (balanceFactor < -1 && data < node.right.data) {
            node.right = this._rotateRight(node.right);
            return this._rotateLeft(node);
        }

        return node;
    }

    // Get the height of a node
    _getHeight(node) {
        return node ? node.height : 0;
    }

    // Get the balance factor of a node
    _getBalanceFactor(node) {
        return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
    }

    // Perform a right rotation
    _rotateRight(node) {
        const newRoot = node.left;
        const temp = newRoot.right;

        newRoot.right = node;
        node.left = temp;

        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));

        return newRoot;
    }

    // Perform a left rotation
    _rotateLeft(node) {
        const newRoot = node.right;
        const temp = newRoot.left;

        newRoot.left = node;
        node.right = temp;

        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));

        return newRoot;
    }

    // Print the tree in in-order traversal
    printInOrder() {
        this._printInOrder(this.root);
    }

    // Recursive function to print the tree in in-order traversal
    _printInOrder(node) {
        if (node !== null) {
            this._printInOrder(node.left);
            console.log(node.data);
            this._printInOrder(node.right);
        }
    }
}
// Create an instance of AVLTree
const avlTree = new AVLTree();

// Insert nodes into the tree
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

// Print the tree in in-order traversal
avlTree.printInOrder();
