class Node<T> {
    key: T;
    left: Node<T> | null;
    right: Node<T> | null;
    height: number;

    constructor(key: T) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // height of a new node is set to 1
    }
}

class AVLTree<T> {
    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    // Utility function to get the height of the tree
    private height(node: Node<T> | null): number {
        return node ? node.height : 0;
    }

    // Utility function to get the balance factor of a node
    private getBalance(node: Node<T> | null): number {
        if (!node) {
            return 0;
        }
        return this.height(node.left) - this.height(node.right);
    }

    // Right rotate subtree rooted with y
    private rightRotate(y: Node<T>): Node<T> {
        const x = y.left!;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        // Return new root
        return x;
    }

    // Left rotate subtree rooted with x
    private leftRotate(x: Node<T>): Node<T> {
        const y = x.right!;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        // Return new root
        return y;
    }

    // Insert a node
    insert(key: T): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: Node<T> | null, key: T): Node<T> {
        // Perform regular BST insert
        if (!node) {
            return new Node(key);
        }

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            // Duplicate keys are not allowed
            return node;
        }

        // Update height of this ancestor node
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right)));

        // Get the balance factor
        const balance = this.getBalance(node);

        // If the node becomes unbalanced, then there are four cases

        // Left Left Case
        if (balance > 1 && key < (node.left!.key)) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && key > (node.right!.key)) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && key > (node.left!.key)) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && key < (node.right!.key)) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // Utility function to perform inorder traversal of the tree
    inorderTraversal(node: Node<T> | null): void {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.key);
            this.inorderTraversal(node.right);
        }
    }

    // Method to display the inorder traversal of the tree
    displayInorder(): void {
        this.inorderTraversal(this.root);
    }
}

// Example usage
const tree = new AVLTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

console.log("Inorder traversal of the AVL tree:");
tree.displayInorder();
