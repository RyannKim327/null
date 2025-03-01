class AVLNode<T> {
    key: T;
    height: number;
    left: AVLNode<T> | null = null;
    right: AVLNode<T> | null = null;

    constructor(key: T) {
        this.key = key;
        this.height = 1; // height of node is initialized
    }
}

class AVLTree<T> {
    root: AVLNode<T> | null = null;

    // Function to get the height of the node
    private height(node: AVLNode<T> | null): number {
        return node ? node.height : 0;
    }

    // Function to get the balance factor of a node
    private getBalance(node: AVLNode<T> | null): number {
        if (!node) {
            return 0;
        }
        return this.height(node.left) - this.height(node.right);
    }

    // Right rotate utility
    private rightRotate(y: AVLNode<T>): AVLNode<T> {
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

    // Left rotate utility
    private leftRotate(x: AVLNode<T>): AVLNode<T> {
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

    // Insert a new node with a given key
    insert(key: T): AVLNode<T> {
        this.root = this.insertNode(this.root, key);
        return this.root;
    }

    private insertNode(node: AVLNode<T> | null, key: T): AVLNode<T> {
        // Normal BST insertion
        if (node === null) {
            return new AVLNode(key);
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
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;

        // Get the balance factor
        const balance = this.getBalance(node);

        // If the node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balance > 1 && key < node.left!.key) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && key > node.right!.key) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && key > node.left!.key) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && key < node.right!.key) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }

        // Return the node pointer
        return node;
    }

    // Preorder traversal
    preOrder(node: AVLNode<T> | null) {
        if (node !== null) {
            console.log(node.key);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Utility function to print the tree
    printTree() {
        this.preOrder(this.root);
    }
}

// Usage example
const avlTree = new AVLTree<number>();
const keys = [10, 20, 30, 40, 50, 25];

keys.forEach(key => {
    avlTree.insert(key);
});

console.log("Preorder traversal of AVL tree is:");
avlTree.printTree();
