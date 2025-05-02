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

    // Method to insert a new value into the binary tree
    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
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

    // In-order traversal
    inOrderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order traversal
    preOrderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order traversal
    postOrderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}
const binaryTree = new BinaryTree<number>();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);

console.log('In-order Traversal:');
binaryTree.inOrderTraversal(); // Outputs: 3, 5, 7, 10, 12, 15, 18

console.log('Pre-order Traversal:');
binaryTree.preOrderTraversal(); // Outputs: 10, 5, 3, 7, 15, 12, 18

console.log('Post-order Traversal:');
binaryTree.postOrderTraversal(); // Outputs: 3, 7, 5, 12, 18, 15, 10
