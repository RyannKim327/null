class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
class BinaryTree<T> {
    root: TreeNode<T> | null = null;

    // Method to insert a value into the tree
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

    // Traversal methods
    inOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    preOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    postOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// In-Order Traversal (should print values in ascending order)
console.log("In-Order Traversal:");
tree.inOrderTraversal(tree.root);

// Pre-Order Traversal
console.log("Pre-Order Traversal:");
tree.preOrderTraversal(tree.root);

// Post-Order Traversal
console.log("Post-Order Traversal:");
tree.postOrderTraversal(tree.root);
