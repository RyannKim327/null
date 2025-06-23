class TreeNode<T> {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a new value into the binary tree
    insert(data: T): void {
        const newNode = new TreeNode(data);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // In-order traversal (Left -> Root -> Right)
    inOrderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order traversal (Root -> Left -> Right)
    preOrderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order traversal (Left -> Right -> Root)
    postOrderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
        }
    }

    // Search for a value in the binary tree
    search(data: T): boolean {
        let current = this.root;
        while (current !== null) {
            if (data === current.data) {
                return true;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}
const tree = new BinaryTree<number>();

// Insert values into the tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// Perform in-order traversal
console.log("In-order Traversal:");
tree.inOrderTraversal(); // Output: 3, 5, 7, 10, 15

// Perform pre-order traversal
console.log("Pre-order Traversal:");
tree.preOrderTraversal(); // Output: 10, 5, 3, 7, 15

// Perform post-order traversal
console.log("Post-order Traversal:");
tree.postOrderTraversal(); // Output: 3, 7, 5, 15, 10

// Search for a value
console.log(tree.search(7)); // Output: true
console.log(tree.search(20)); // Output: false
