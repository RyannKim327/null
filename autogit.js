// Define the Node class for the tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = "red"; // Initialize all nodes as red by default
        this.parent = null;
    }
}

// Define the RedBlackTree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper function to rotate left
    rotateLeft(node) {
        const rightChild = node.right;
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

    // Helper function to rotate right
    rotateRight(node) {
        const leftChild = node.left;
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

    // Helper function to fix violations after insertion
    fixViolation(node) {
        while (node !== this.root && node.color === "red" && node.parent.color === "red") {
            let parent = node.parent;
            let grandparent = parent.parent;

            // Case 1: Parent is a left child of the grandparent
            if (parent === grandparent.left) {
                let uncle = grandparent.right;
                // Case 1a: Uncle is red, recoloring
                if (uncle !== null && uncle.color === "red") {
                    grandparent.color = "red";
                    parent.color = "black";
                    uncle.color = "black";
                    node = grandparent;
                } else {
                    // Case 1b: Uncle is black
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandparent);
                    // Swap the colors of the parent and grandparent
                    const temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            } else { // Case 2: Parent is a right child of the grandparent
                let uncle = grandparent.left;
                // Case 2a: Uncle is red, recoloring
                if (uncle !== null && uncle.color === "red") {
                    grandparent.color = "red";
                    parent.color = "black";
                    uncle.color = "black";
                    node = grandparent;
                } else {
                    // Case 2b: Uncle is black
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandparent);
                    // Swap the colors of the parent and grandparent
                    const temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            }
        }
        this.root.color = "black"; // Ensure the root is always black
    }

    // Public method to insert a value into the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.root.color = "black"; // Root must be black
        } else {
            let current = this.root;
            let parent = null;
            while (current !== null) {
                parent = current;
                if (newNode.value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            newNode.parent = parent;
            if (newNode.value < parent.value) {
                parent.left = newNode;
            } else {
                parent.right = newNode;
            }
            this.fixViolation(newNode); // Fix any violations after insertion
        }
    }
}

// Usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(5);
