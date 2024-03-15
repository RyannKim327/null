class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.left = null;
        this.right = null;
        this.color = 'red'; // new nodes are initially colored red
    }
}
  
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper method to perform left rotation
    rotateLeft(node) {
        const right = node.right;
        node.right = right.left;
        if (right.left) {
            right.left.parent = node;
        }
        right.parent = node.parent;
        if (!node.parent) {
            this.root = right;
        } else if (node === node.parent.left) {
            node.parent.left = right;
        } else {
            node.parent.right = right;
        }
        right.left = node;
        node.parent = right;
    }

    // Helper method to perform right rotation
    rotateRight(node) {
        const left = node.left;
        node.left = left.right;
        if (left.right) {
            left.right.parent = node;
        }
        left.parent = node.parent;
        if (!node.parent) {
            this.root = left;
        } else if (node === node.parent.right) {
            node.parent.right = left;
        } else {
            node.parent.left = left;
        }
        left.right = node;
        node.parent = left;
    }

    // Insert a new node into the red-black tree
    insert(data) {
        const newNode = new Node(data);
        
        // Insertion logic here
        
        // Balance the tree
        this.fixTreeViolation(newNode);
    }

    // Fix any violation of red-black tree properties after insertion
    fixTreeViolation(node) {
        while (node !== this.root && node.color === 'red' && node.parent.color === 'red') {
            let parent = node.parent;
            let grandparent = parent.parent;

            // Case 1: Parent is left child of grandparent
            if (parent === grandparent.left) {
                const uncle = grandparent.right;

                // Case 1A: Uncle is red
                if (uncle && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                }
                // Case 1B: Uncle is black
                else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandparent);
                    const tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            }
            // Case 2: Parent is right child of grandparent
            else {
                const uncle = grandparent.left;

                // Case 2A: Uncle is red
                if (uncle && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                }
                // Case 2B: Uncle is black
                else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandparent);
                    const tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            }
        }
        this.root.color = 'black';
    }
}
