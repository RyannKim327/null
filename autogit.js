// Red-Black Tree Node
class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 0 for black, 1 for red
    }
}

// Red-Black Tree
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the tree
    insert(value) {
        const newNode = new Node(value, 1); // New node is always red

        // Insert the node as in a binary search tree
        let parent = null;
        let current = this.root;
        while (current !== null) {
            parent = current;
            if (newNode.value < current.value)
                current = current.left;
            else
                current = current.right;
        }

        newNode.parent = parent;
        if (parent === null)
            this.root = newNode;
        else if (newNode.value < parent.value)
            parent.left = newNode;
        else
            parent.right = newNode;

        this._fixInsert(newNode); // Fix any violations
    }

    // Fix the tree after insertion
    _fixInsert(node) {
        while (node !== this.root && node.parent.color === 1) {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;

                // Case 1: Uncle is red
                if (uncle !== null && uncle.color === 1) {
                    node.parent.color = 0;
                    uncle.color = 0;
                    node.parent.parent.color = 1;
                    node = node.parent.parent;
                } else {
                    // Case 2: Uncle is black and node is a right child
                    if (node === node.parent.right) {
                        node = node.parent;
                        this._rotateLeft(node); // Convert to case 3
                    }

                    // Case 3: Uncle is black and node is a left child
                    node.parent.color = 0;
                    node.parent.parent.color = 1;
                    this._rotateRight(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;

                // Case 4: Uncle is red
                if (uncle !== null && uncle.color === 1) {
                    node.parent.color = 0;
                    uncle.color = 0;
                    node.parent.parent.color = 1;
                    node = node.parent.parent;
                } else {
                    // Case 5: Uncle is black and node is a left child
                    if (node === node.parent.left) {
                        node = node.parent;
                        this._rotateRight(node); // Convert to case 6
                    }

                    // Case 6: Uncle is black and node is a right child
                    node.parent.color = 0;
                    node.parent.parent.color = 1;
                    this._rotateLeft(node.parent.parent);
                }
            }
        }

        this.root.color = 0; // Make sure the root is always black
    }

    // Left rotation
    _rotateLeft(node) {
        let pivot = node.right;
        node.right = pivot.left;
        if (pivot.left !== null)
            pivot.left.parent = node;
        pivot.parent = node.parent;
        if (node.parent === null)
            this.root = pivot;
        else if (node === node.parent.left)
            node.parent.left = pivot;
        else
            node.parent.right = pivot;
        pivot.left = node;
        node.parent = pivot;
    }

    // Right rotation
    _rotateRight(node) {
        let pivot = node.left;
        node.left = pivot.right;
        if (pivot.right !== null)
            pivot.right.parent = node;
        pivot.parent = node.parent;
        if (node.parent === null)
            this.root = pivot;
        else if (node === node.parent.right)
            node.parent.right = pivot;
        else
            node.parent.left = pivot;
        pivot.right = node;
        node.parent = pivot;
    }

    // Print the tree using in-order traversal
    print() {
        this._printInOrder(this.root);
    }

    _printInOrder(node) {
        if (node !== null) {
            this._printInOrder(node.left);
            console.log(node.value, node.color === 0 ? 'Black' : 'Red');
            this._printInOrder(node.right);
        }
    }
}

// Usage
const tree = new RedBlackTree();
tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(25);
tree.insert(30);
tree.print();
