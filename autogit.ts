// Define the structure of a node in the BST
class Node {
    value: number;
    left: Node | null = null;
    right: Node | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

// Define the Binary Search Tree class
class BinarySearchTree {
    root: Node | null = null;

    // Method to insert a new value in the BST
    insert(value: number) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper function for inserting a node
    private insertNode(node: Node, newNode: Node) {
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

    // Method to search for a value in the BST
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    // Helper function for searching a node
    private searchNode(node: Node | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // Value found
        }
    }

    // Method for in-order traversal of the BST
    inorderTraversal(callback: (value: number) => void) {
        this.inorder(this.root, callback);
    }

    // Helper function for in-order traversal
    private inorder(node: Node | null, callback: (value: number) => void) {
        if (node !== null) {
            this.inorder(node.left, callback);
            callback(node.value);
            this.inorder(node.right, callback);
        }
    }
}

// Usage example
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

// Search for a value
console.log(bst.search(5)); // true
console.log(bst.search(8)); // false

// In-order traversal
bst.inorderTraversal(value => {
    console.log(value); // Outputs the values in sorted order: 3, 5, 10, 15
});
