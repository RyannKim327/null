// First, define the Node and RedBlackTree classes

class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Define the main operations: insert, delete, and search

    // Insert a value into the tree
    insert(value) {
        const newNode = new Node(value, 'red');
        if (this.root === null) {
            this.root = newNode;
            newNode.color = 'black';
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        newNode.parent = current;
                        break;
                    } else current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        newNode.parent = current;
                        break;
                    } else current = current.right;
                }
            }
            this.fixTree(newNode);
        }
    }

    // Fix the tree after insertion to maintain the red-black tree properties
    fixTree(node) {
        while (node.parent !== null && node.parent.color === 'red') {
            if (node.parent === node.parent.parent.left) {
                const uncle = node.parent.parent.right;
                if (uncle && uncle.color === 'red') {
                    node.parent.color = 'black';
                    uncle.color = 'black';
                    node.parent.parent.color = 'red';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }
                    node.parent.color = 'black';
                    node.parent.parent.color = 'red';
                    this.rightRotate(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.left;
                if (uncle && uncle.color === 'red') {
                    node.parent.color = 'black';
                    uncle.color = 'black';
                    node.parent.parent.color = 'red';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = 'black';
                    node.parent.parent.color = 'red';
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = 'black';
    }

    // Perform a left rotation around a given node
    leftRotate(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) rightChild.left.parent = node;
        rightChild.parent = node.parent;
        if (node.parent === null) this.root = rightChild;
        else if (node === node.parent.left) node.parent.left = rightChild;
        else node.parent.right = rightChild;
        rightChild.left = node;
        node.parent = rightChild;
    }

    // Perform a right rotation around a given node
    rightRotate(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) leftChild.right.parent = node;
        leftChild.parent = node.parent;
        if (node.parent === null) this.root = leftChild;
        else if (node === node.parent.right) node.parent.right = leftChild;
        else node.parent.left = leftChild;
        leftChild.right = node;
        node.parent = leftChild;
    }

    // Search for a value in the tree
    search(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) return true;
            else if (value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }
}
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(15);
console.log(rbTree.search(5)); // Output: true
console.log(rbTree.search(20)); // Output: false
