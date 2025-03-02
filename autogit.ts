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

    // Insert a new value into the tree
    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper function to insert a node
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

    // Search for a value in the tree
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    // Helper function to search for a node
    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // Found the value
        }
    }

    // In-order traversal (sorted order)
    inOrderTraversal(callback: (value: number) => void): void {
        this.inOrderTraverseNode(this.root, callback);
    }

    // Helper function for in-order traversal
    private inOrderTraverseNode(node: TreeNode | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // Additional methods (pre-order, post-order traversals, delete, etc.) can be added as needed
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log("In-order Traversal:");
bst.inOrderTraversal((value) => console.log(value)); // Output will be sorted: 3, 5, 7, 10, 12, 15, 20

console.log("Search for 7:", bst.search(7)); // true
console.log("Search for 9:", bst.search(9)); // false
