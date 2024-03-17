// Node class to represent a node in the red-black tree
class Node {
    constructor(value, color, left = null, right = null, parent = null) {
        this.value = value;
        this.color = color; // Red or Black
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

// RedBlackTree class to represent the red-black tree and its operations
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the red-black tree
    insert(value) {
        let node = new Node(value, "RED");

        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }

        this.fixViolations(node);
    }

    // Helper method to insert a node into the red-black tree
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
                node.parent = root;
            } else {
                this.insertNode(root.left, node);
            }
        } else if (node.value > root.value) {
            if (root.right === null) {
                root.right = node;
                node.parent = root;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    // Fix any violations of the red-black tree properties after insertion
    fixViolations(node) {
        while (node !== this.root && node.color === "RED" && node.parent.color === "RED") {
            // Implement rotation and recoloring rules for fixing violations here
        }

        this.root.color = "BLACK";
    }

    // Print the red-black tree in-order traversal
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value + " " + node.color);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage:
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(40);

rbTree.inOrderTraversal(rbTree.root);
