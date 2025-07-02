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
        this.inOrderTraversalNode(this.root, callback);
    }

    private inOrderTraversalNode(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.value);
            this.inOrderTraversalNode(node.right, callback);
        }
    }
}
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

// Searching for a value
console.log(bst.search(4)); // true
console.log(bst.search(10)); // false

// In-Order Traversal
bst.inOrderTraversal((value) => {
    console.log(value); // Outputs: 2, 3, 4, 5, 6, 7, 8
});
