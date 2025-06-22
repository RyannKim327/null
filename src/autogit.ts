class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
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

    // Search for a value in the BST
    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): boolean {
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

    // In-order traversal (left, root, right)
    inOrderTraversal(callback: (value: T) => void): void {
        this.inOrder(this.root, callback);
    }

    private inOrder(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(callback: (value: T) => void): void {
        this.preOrder(this.root, callback);
    }

    private preOrder(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            callback(node.value);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(callback: (value: T) => void): void {
        this.postOrder(this.root, callback);
    }

    private postOrder(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node !== null) {
            this.postOrder(node.left, callback);
            this.postOrder(node.right, callback);
            callback(node.value);
        }
    }
}
const bst = new BinarySearchTree<number>();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Search for values
console.log(bst.search(7)); // Output: true
console.log(bst.search(20)); // Output: false

// In-order traversal
console.log("In-order traversal:");
bst.inOrderTraversal((value) => console.log(value));
// Output: 3, 5, 7, 10, 15

// Pre-order traversal
console.log("Pre-order traversal:");
bst.preOrderTraversal((value) => console.log(value));
// Output: 10, 5, 3, 7, 15

// Post-order traversal
console.log("Post-order traversal:");
bst.postOrderTraversal((value) => console.log(value));
// Output: 3, 7, 5, 15, 10
