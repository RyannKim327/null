// Define a Node class to represent a node in the red-black tree
class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 0 for red, 1 for black
    }
}

// Define a RedBlackTree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Method to perform left rotation
    leftRotate(node) {
        const temp = node.right;
        node.right = temp.left;
        
        if (temp.left !== null) {
            temp.left.parent = node;
        }

        temp.parent = node.parent;

        if (node.parent === null) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }

        temp.left = node;
        node.parent = temp;
    }

    // Method to perform right rotation
    rightRotate(node) {
        const temp = node.left;
        node.left = temp.right;

        if (temp.right !== null) {
            temp.right.parent = node;
        }

        temp.parent = node.parent;

        if (node.parent === null) {
            this.root = temp;
        } else if (node === node.parent.right) {
            node.parent.right = temp;
        } else {
            node.parent.left = temp;
        }

        temp.right = node;
        node.parent = temp;
    }

    // Method to fix violations after insertion
    fixInsertion(node) {
        while (node !== this.root && node.parent.color === 0) {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                
                if (uncle.color === 0) {
                    node.parent.color = 1;
                    uncle.color = 1;
                    node.parent.parent.color = 0;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }

                    node.parent.color = 1;
                    node.parent.parent.color = 0;
                    this.rightRotate(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                
                if (uncle.color === 0) {
                    node.parent.color = 1;
                    uncle.color = 1;
                    node.parent.parent.color = 0;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }

                    node.parent.color = 1;
                    node.parent.parent.color = 0;
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = 1;
    }

    // Method to insert a node into the red-black tree
    insert(value) {
        const newNode = new Node(value, 0);
        let y = null;
        let x = this.root;

        while (x !== null) {
            y = x;
            if (newNode.value < x.value) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = y;

        if (y === null) {
            this.root = newNode;
        } else if (newNode.value < y.value) {
            y.left = newNode;
        } else {
            y.right = newNode;
        }

        this.fixInsertion(newNode);
    }
}
