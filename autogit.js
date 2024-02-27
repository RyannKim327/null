// Node class to represent a node in the Red-Black Tree
class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 0 for red, 1 for black
    }
}

// Red-Black Tree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper function to perform left rotation
    leftRotate(node) {
        let temp = node.right;
        node.right = temp.left;
        if (temp.left != null) {
            temp.left.parent = node;
        }
        temp.parent = node.parent;
        if (node.parent == null) {
            this.root = temp;
        } else if (node == node.parent.left) {
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
        if (temp.right != null) {
            temp.right.parent = node;
        }
        temp.parent = node.parent;
        if (node.parent == null) {
            this.root = temp;
        } else if (node == node.parent.right) {
            node.parent.right = temp;
        } else {
            node.parent.left = temp;
        }
        temp.right = node;
        node.parent = temp;
    }

    // Helper function to fix the tree's properties after insertion
    fixTreeProperties(node) {
        while (node != this.root && node.parent.color === 0) {
            if (node.parent == node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle.color === 0) {
                    node.parent.color = 1;
                    uncle.color = 1;
                    node.parent.parent.color = 0;
                    node = node.parent.parent;
                } else {
                    if (node == node.parent.right) {
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
                    if (node == node.parent.left) {
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

    // Helper function to insert a value into the Red-Black Tree
    insert(value) {
        let newNode = new Node(value, 0); // New node is always red
        let current = this.root;
        let parent = null;

        while (current != null) {
            parent = current;
            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;
        if (parent == null) {
            this.root = newNode;
        } else if (newNode.value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.fixTreeProperties(newNode);
    }
}
