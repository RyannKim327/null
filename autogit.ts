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

    // Insert a new value
    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
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

    // Search for a value
    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    // In-order traversal
    inOrderTraversal(cb: (value: number) => void): void {
        this.inOrder(this.root, cb);
    }

    private inOrder(node: TreeNode | null, cb: (value: number) => void): void {
        if (node !== null) {
            this.inOrder(node.left, cb);
            cb(node.value);
            this.inOrder(node.right, cb);
        }
    }
}
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);

// Searching for values
console.log(bst.search(3)); // true
console.log(bst.search(8)); // false

// In-order traversal
bst.inOrderTraversal(value => console.log(value)); 
// Output: 1, 3, 4, 5, 7
