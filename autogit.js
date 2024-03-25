// Node class to represent each node in the binary search tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// BinarySearchTree class to represent the binary search tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Function to insert a new node into the binary search tree
    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
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

    // Function to perform in-order traversal of the binary search tree
    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.data);
            this.inOrderTraversal(node.right, callback);
        }
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);

bst.inOrderTraversal(bst.root, data => console.log(data)); // Output: 3, 5, 7, 10, 15
