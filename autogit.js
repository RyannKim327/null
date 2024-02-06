// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BinarySearchTree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a value into the tree
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively insert a node
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

    // Method to search for a value in the tree
    search(value) {
        return this.searchNode(this.root, value);
    }

    // Helper method to recursively search for a node
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
    
    // Method to traverse the tree in order (ascending)
    inOrderTraversal() {
        const result = [];

        // Helper function to recursively traverse the tree
        function traverse(node) {
            if (node !== null) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        }

        traverse(this.root);
        return result;
    }
}
// Create a new instance of BinarySearchTree
const tree = new BinarySearchTree();

// Insert values into the tree
tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

// Search for a value in the tree
console.log(tree.search(40));      // Output: true
console.log(tree.search(90));      // Output: false

// In-order traversal of the tree
console.log(tree.inOrderTraversal());     // Output: [20, 30, 40, 50, 60, 70, 80]
