// Red-Black Tree Node class
class Node {
    constructor(data, color) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // RED or BLACK
    }
}

// Red-Black Tree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the tree
    insert(data) {
        let newNode = new Node(data, 'RED');
        this.root = this.insertNode(this.root, newNode);

        // Fix any violations of the Red-Black tree properties
        this.fixViolations(newNode);
    }

    // Recursive function to insert a node into the tree
    insertNode(root, node) {
        if (root === null) return node;

        if (node.data < root.data) {
            root.left = this.insertNode(root.left, node);
            root.left.parent = root;
        } else if (node.data > root.data) {
            root.right = this.insertNode(root.right, node);
            root.right.parent = root;
        }

        return root;
    }

    // Fix violations of Red-Black tree properties after insertion
    fixViolations(node) {
        while (node !== this.root && node.color === 'RED' && node.parent.color === 'RED') {
            // Implement the fix here
            // This involves rotations and recoloring of nodes
        }

        this.root.color = 'BLACK'; // Ensure root is always black
    }
}

// Usage
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
