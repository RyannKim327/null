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
    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
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
            // Go to the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Go to the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a value in the BST
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    // In-order traversal of the BST
    inOrderTraversal(callback: (value: number) => void): void {
        this.inOrder(this.root, callback);
    }

    private inOrder(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }

    // Pre-order traversal of the BST
    preOrderTraversal(callback: (value: number) => void): void {
        this.preOrder(this.root, callback);
    }

    private preOrder(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            callback(node.value);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    // Post-order traversal of the BST
    postOrderTraversal(callback: (value: number) => void): void {
        this.postOrder(this.root, callback);
    }

    private postOrder(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.postOrder(node.left, callback);
            this.postOrder(node.right, callback);
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

// Search for values
console.log(bst.search(7));  // true
console.log(bst.search(1));  // false

// In-order traversal
bst.inOrderTraversal(value => console.log(value)); // 3, 5, 7, 10, 12, 15, 18

// Pre-order traversal
bst.preOrderTraversal(value => console.log(value)); // 10, 5, 3, 7, 15, 12, 18

// Post-order traversal
bst.postOrderTraversal(value => console.log(value)); // 3, 7, 5, 12, 18, 15, 10
