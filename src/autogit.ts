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
        this.root = null; // Initially, the tree is empty
    }

    // Insert a value into the BST
    insert(value: number): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
        } else {
            // Otherwise, find the correct position for the new node
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            // Insert into the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Insert into the right subtree
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
            return false; // Value not found
        }

        if (value < node.value) {
            // Search in the left subtree
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            // Search in the right subtree
            return this.searchNode(node.right, value);
        } else {
            // Value found
            return true;
        }
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    private inOrder(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            this.inOrder(node.left, result); // Traverse left subtree
            result.push(node.value); // Visit the root
            this.inOrder(node.right, result); // Traverse right subtree
        }
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(): number[] {
        const result: number[] = [];
        this.preOrder(this.root, result);
        return result;
    }

    private preOrder(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            result.push(node.value); // Visit the root
            this.preOrder(node.left, result); // Traverse left subtree
            this.preOrder(node.right, result); // Traverse right subtree
        }
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(): number[] {
        const result: number[] = [];
        this.postOrder(this.root, result);
        return result;
    }

    private postOrder(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            this.postOrder(node.left, result); // Traverse left subtree
            this.postOrder(node.right, result); // Traverse right subtree
            result.push(node.value); // Visit the root
        }
    }
}
const bst = new BinarySearchTree();

// Insert values into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Search for values
console.log(bst.search(7)); // Output: true
console.log(bst.search(12)); // Output: false

// Perform traversals
console.log("In-order traversal:", bst.inOrderTraversal()); // Output: [3, 5, 7, 10, 15]
console.log("Pre-order traversal:", bst.preOrderTraversal()); // Output: [10, 5, 3, 7, 15]
console.log("Post-order traversal:", bst.postOrderTraversal()); // Output: [3, 7, 5, 15, 10]
