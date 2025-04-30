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
class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Method to insert a value in the binary tree
    insert(value: T): void {
        const newNode = new TreeNode(value);
        
        if (this.root === null) {
            this.root = newNode; // If the tree is empty, set as root
            return;
        }

        this.insertRecursively(this.root, newNode);
    }

    private insertRecursively(current: TreeNode<T>, newNode: TreeNode<T>): void {
        // Assuming that smaller values go to the left and larger values to the right
        if (newNode.value < current.value) {
            if (current.left === null) {
                current.left = newNode; // Insert on the left
            } else {
                this.insertRecursively(current.left, newNode); // Go left
            }
        } else {
            if (current.right === null) {
                current.right = newNode; // Insert on the right
            } else {
                this.insertRecursively(current.right, newNode); // Go right
            }
        }
    }

    // Traversal methods
    inOrderTraversal() {
        const result: T[] = [];
        this.inOrderHelper(this.root, result);
        return result;
    }

    private inOrderHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            this.inOrderHelper(node.left, result);
            result.push(node.value);
            this.inOrderHelper(node.right, result);
        }
    }

    preOrderTraversal() {
        const result: T[] = [];
        this.preOrderHelper(this.root, result);
        return result;
    }

    private preOrderHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            result.push(node.value);
            this.preOrderHelper(node.left, result);
            this.preOrderHelper(node.right, result);
        }
    }

    postOrderTraversal() {
        const result: T[] = [];
        this.postOrderHelper(this.root, result);
        return result;
    }

    private postOrderHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            this.postOrderHelper(node.left, result);
            this.postOrderHelper(node.right, result);
            result.push(node.value);
        }
    }
}
const binaryTree = new BinaryTree<number>();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

console.log("In-order Traversal: ", binaryTree.inOrderTraversal()); // Output: [3, 5, 7, 10, 15]
console.log("Pre-order Traversal: ", binaryTree.preOrderTraversal()); // Output: [10, 5, 3, 7, 15]
console.log("Post-order Traversal: ", binaryTree.postOrderTraversal()); // Output: [3, 7, 5, 15, 10]
