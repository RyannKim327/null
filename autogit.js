// Define the RedBlackTree class
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Node class for storing tree nodes
    class Node {
        constructor(value, color) {
            this.value = value;
            this.left = null;
            this.right = null;
            this.parent = null;
            this.color = color; // 'red' or 'black'
        }
    }

    // Left rotate helper function
    leftRotate(node) {
        const rightChild = node.right;
        node.right = rightChild.left;

        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    // Right rotate helper function
    rightRotate(node) {
        const leftChild = node.left;
        node.left = leftChild.right;

        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    // Red-black tree insert
    insert(value) {
        const newNode = new Node(value, 'red');
        let current = this.root;
        let parent = null;

        while (current !== null) {
            parent = current;

            if (newNode.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;

        if (parent === null) {
            this.root = newNode;
        } else if (newNode.value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        this.fixInsert(newNode);
    }

    // Fix the red-black tree after insertion
    fixInsert(node) {
        while (node.parent !== null && node.parent.color === 'red') {
            if (node.parent === node.parent.parent.left) {
                const uncle = node.parent.parent.right;

                if (uncle !== null && uncle.color === 'red') {
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

                if (uncle !== null && uncle.color === 'red') {
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
}
// Create a red-black tree instance
const rbTree = new RedBlackTree();

// Insert values into the tree
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(5);
rbTree.insert(30);
rbTree.insert(15);
