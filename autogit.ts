class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Method to insert a new value into the BST
    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
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

    // Method to search for a value
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // value found
        }
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            callback(node.value);
            this.preOrderTraversal(node.left, callback);
            this.preOrderTraversal(node.right, callback);
        }
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.postOrderTraversal(node.left, callback);
            this.postOrderTraversal(node.right, callback);
            callback(node.value);
        }
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Search for a value
console.log(bst.search(7)); // true
console.log(bst.search(20)); // false

// In-order traversal
console.log("In-Order Traversal:");
bst.inOrderTraversal(bst.root, (value) => console.log(value)); // 3, 5, 7, 10, 12, 15, 18
