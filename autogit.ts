class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}
class BinarySearchTree {
    root: TreeNode | null = null;

    // Method to insert a value
    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method for inserting a node
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

    // Method to search for a value
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    // Helper method for searching a node
    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // value is found
        }
    }

    // In-order Traversal (Left, Root, Right)
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

    // Pre-order Traversal (Root, Left, Right)
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

    // Post-order Traversal (Left, Right, Root)
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
bst.insert(7);
bst.insert(3);
bst.insert(9);
bst.insert(1);
bst.insert(5);

// Search for a value
console.log(bst.search(5)); // true
console.log(bst.search(2)); // false

// In-order traversal
bst.inOrderTraversal((value) => {
    console.log(value); // 1, 3, 5, 7, 9
});
