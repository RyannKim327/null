class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary search tree
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node into the binary search tree
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Perform an in-order traversal of the binary search tree
    inOrderTraversal(callback) {
        this.inOrderTraversalNode(this.root, callback);
    }

    // Helper method to perform an in-order traversal on a specific node
    inOrderTraversalNode(node, callback) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.value);
            this.inOrderTraversalNode(node.right, callback);
        }
    }

    // Search for a value in the binary search tree
    search(value) {
        return this.searchNode(this.root, value);
    }

    // Helper method to search for a value in a specific node
    searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }
}
class BSTNode {
    constructor() {
        this.bst = new BinarySearchTree();
    }

    insert(value) {
        this.bst.insert(value);
    }

    search(value) {
        return this.bst.search(value);
    }

    inOrderTraversal(callback) {
        this.bst.inOrderTraversal(callback);
    }
}
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(8);
bst.insert(3);

bst.inOrderTraversal(value => console.log(value));

console.log(bst.search(8)); // Output: true
console.log(bst.search(20)); // Output: false
