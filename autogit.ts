class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree<T> {
    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node
    private insertNode(node: Node<T>, newNode: Node<T>): void {
        if (newNode.value < node.value) {
            // Insert in the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Insert in the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    // Helper method to search for a value
    private searchNode(node: Node<T> | null, value: T): boolean {
        if (node === null) {
            return false; // Not found
        }

        if (value < node.value) {
            return this.searchNode(node.left, value); // Search left
        } else if (value > node.value) {
            return this.searchNode(node.right, value); // Search right
        } else {
            return true; // Value found
        }
    }

    inorderTraversal(callback: (value: T) => void): void {
        this.inorder(this.root, callback);
    }

    // Helper method to perform inorder traversal
    private inorder(node: Node<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            this.inorder(node.left, callback);
            callback(node.value);
            this.inorder(node.right, callback);
        }
    }
}
const bst = new BinarySearchTree<number>();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Search for a value
console.log(bst.search(40)); // true
console.log(bst.search(25)); // false

// Inorder traversal
bst.inorderTraversal(value => console.log(value)); // Outputs: 20, 30, 40, 50, 60, 70, 80
