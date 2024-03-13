// Red-Black Tree Node
class Node {
    constructor(value, color = 'red') {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = color; // "red" or "black"
    }
}

// Red-Black Tree
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Left Rotation
    rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        newRoot.color = node.color;
        node.color = 'red';
        return newRoot;
    }

    // Right Rotation
    rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        newRoot.color = node.color;
        node.color = 'red';
        return newRoot;
    }

    // Check if a node is red
    isRed(node) {
        return node ? node.color === 'red' : false;
    }

    // Red-Black Tree Insertion
    insert(value) {
        const insertNode = (node, value) => {
            if (!node) {
                return new Node(value, 'red');
            }

            if (value < node.value) {
                node.left = insertNode(node.left, value);
            } else if (value > node.value) {
                node.right = insertNode(node.right, value);
            } else {
                // Duplicate values not allowed
                return node;
            }

            // Balance the tree
            if (this.isRed(node.right) && !this.isRed(node.left)) {
                node = this.rotateLeft(node);
            }
            if (this.isRed(node.left) && this.isRed(node.left.left)) {
                node = this.rotateRight(node);
            }
            if (this.isRed(node.left) && this.isRed(node.right)) {
                node.left.color = 'black';
                node.right.color = 'black';
                node.color = 'red';
            }

            return node;
        };

        this.root = insertNode(this.root, value);
        this.root.color = 'black'; // Root is always black
    }
}

// Usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
