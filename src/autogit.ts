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

    // Insert a new value into the BST
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

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // Value found
        }
    }

    // In-order traversal of the BST
    inOrderTraversal(node: TreeNode | null, visit: (value: number) => void): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, visit);
            visit(node.value);
            this.inOrderTraversal(node.right, visit);
        }
    }

    // Public method to start in-order traversal
    traverseInOrder(visit: (value: number) => void): void {
        this.inOrderTraversal(this.root, visit);
    }
}
const bst = new BinarySearchTree();

// Inserting values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Searching for values
console.log(bst.search(7));  // true
console.log(bst.search(20)); // false

// Traversing the tree in order
console.log('In-order Traversal:');
bst.traverseInOrder(value => console.log(value)); // 3, 5, 7, 10, 12, 15, 18
