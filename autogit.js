// Node class for Red-Black Tree
class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = color; // 0 for black, 1 for red
    }
}

// Red-Black Tree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Rotate left helper function
    rotateLeft(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        temp.color = node.color;
        node.color = 1;
        return temp;
    }

    // Rotate right helper function
    rotateRight(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        temp.color = node.color;
        node.color = 1;
        return temp;
    }

    // Helper function to flip colors
    flipColors(node) {
        node.color = 1;
        node.left.color = 0;
        node.right.color = 0;
    }

    // Insertion helper function
    insertHelper(node, value) {
        if (node === null) {
            return new Node(value, 1);
        }

        if (value < node.value) {
            node.left = this.insertHelper(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertHelper(node.right, value);
        }

        // Perform rotation and color flipping as necessary
        if (node.right !== null && node.right.color === 1 && (node.left === null || node.left.color === 0)) {
            node = this.rotateLeft(node);
        }
        if (node.left !== null && node.left.color === 1 && node.left.left !== null && node.left.left.color === 1) {
            node = this.rotateRight(node);
        }
        if (node.left !== null && node.right !== null && node.left.color === 1 && node.right.color === 1) {
            this.flipColors(node);
        }

        return node;
    }

    // Insert a value into the Red-Black Tree
    insert(value) {
        this.root = this.insertHelper(this.root, value);
        this.root.color = 0; // Ensure root is black
    }

    // Utility function to perform an inorder traversal of the tree
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value + " - " + (node.color === 0 ? "Black" : "Red"));
            this.inorderTraversal(node.right);
        }
    }

    // Print the Red-Black Tree in inorder
    printTree() {
        this.inorderTraversal(this.root);
    }
}

// Example usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
rbTree.printTree();
