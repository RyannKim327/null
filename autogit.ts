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

    // Insert value into the binary tree (this is a simple implementation)
    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
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
    inOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }

    // Pre-order traversal
    preOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node) {
            callback(node.value);
            this.preOrderTraversal(node.left, callback);
            this.preOrderTraversal(node.right, callback);
        }
    }

    // Post-order traversal
    postOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
        if (node) {
            this.postOrderTraversal(node.left, callback);
            this.postOrderTraversal(node.right, callback);
            callback(node.value);
        }
    }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// In-order traversal
console.log("In-order traversal:");
tree.inOrderTraversal(tree.root, value => console.log(value));

// Pre-order traversal
console.log("Pre-order traversal:");
tree.preOrderTraversal(tree.root, value => console.log(value));

// Post-order traversal
console.log("Post-order traversal:");
tree.postOrderTraversal(tree.root, value => console.log(value));
