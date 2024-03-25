// Define the Node class for the red-black tree
class Node {
    constructor(key, color) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 0 for black, 1 for red
    }
}

// Define the RedBlackTree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper function to perform left rotation
    leftRotate(node) {
        let temp = node.right;
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

    // Helper function to perform right rotation
    rightRotate(node) {
        let temp = node.left;
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

    // Helper function to fix the red-black tree properties after insertion
    fixInsert(node) {
        while (node !== this.root && node.parent.color === 1) {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle.color === 1) {
                    node.parent.color = 0;
                    uncle.color = 0;
                    node.parent.parent.color = 1;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }
                    node.parent.color = 0;
                    node.parent.parent.color = 1;
                    this.rightRotate(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                if (uncle.color === 1) {
                    node.parent.color = 0;
                    uncle.color = 0;
                    node.parent.parent.color = 1;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = 0;
                    node.parent.parent.color = 1;
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = 0;
    }

    // Public method to insert a key into the red-black tree
    insert(key) {
        let newNode = new Node(key, 1); // By default, new nodes are colored red
        let current = this.root;
        let parent = null;
        while (current !== null) {
            parent = current;
            if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        newNode.parent = parent;
        if (parent === null) {
            this.root = newNode;
        } else if (key < parent.key) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
        if (newNode.parent === null) {
            newNode.color = 0; // Root is always black
            return;
        }
        if (newNode.parent.parent === null) {
            return;
        }
        this.fixInsert(newNode);
    }
}

// Usage
let rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
rbt.insert(15);
