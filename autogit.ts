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
class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Method to insert a value into the tree
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

    // Method to search for a value in the tree
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

    // In-order traversal of the tree
    inOrderTraversal(node: TreeNode | null, visit: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, visit);
            visit(node.value);
            this.inOrderTraversal(node.right, visit);
        }
    }

    // Pre-order traversal of the tree
    preOrderTraversal(node: TreeNode | null, visit: (value: number) => void): void {
        if (node !== null) {
            visit(node.value);
            this.preOrderTraversal(node.left, visit);
            this.preOrderTraversal(node.right, visit);
        }
    }

    // Post-order traversal of the tree
    postOrderTraversal(node: TreeNode | null, visit: (value: number) => void): void {
        if (node !== null) {
            this.postOrderTraversal(node.left, visit);
            this.postOrderTraversal(node.right, visit);
            visit(node.value);
        }
    }
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// Searching for a value
console.log(tree.search(7));  // true
console.log(tree.search(100)); // false

// In-order traversal
tree.inOrderTraversal(tree.root, (value) => {
    console.log(value); // Will print values in sorted order
});
