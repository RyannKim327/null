class AVLNode<T> {
    key: T;
    height: number;
    left: AVLNode<T> | null;
    right: AVLNode<T> | null;

    constructor(key: T) {
        this.key = key;
        this.height = 1; // New node is initially added at leaf
        this.left = null;
        this.right = null;
    }
}

class AVLTree<T> {
    root: AVLNode<T> | null;

    constructor() {
        this.root = null;
    }
    
    // Utility function to get the height of the tree
    getHeight(node: AVLNode<T> | null): number {
        if (!node) {
            return 0;
        }
        return node.height;
    }

    // Utility function to get the balance factor of a node
    getBalance(node: AVLNode<T> | null): number {
        if (!node) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotation
    rightRotate(y: AVLNode<T>): AVLNode<T> {
        const x = y.left!;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return new root
        return x;
    }

    // Left rotation
    leftRotate(x: AVLNode<T>): AVLNode<T> {
        const y = x.right!;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return new root
        return y;
    }

    // Recursive function to insert a key in the subtree rooted with node
    insert(node: AVLNode<T> | null, key: T): AVLNode<T> {
        // Perform the normal BST insertion
        if (node === null) {
            return new AVLNode(key);
        }

        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else {
            // Duplicate keys are not allowed in the AVL tree
            return node;
        }

        // Update the height of this ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right)));

        // Get the balance factor of this ancestor node to check whether
        // this node became unbalanced
        const balance = this.getBalance(node);

        // If this node becomes unbalanced, then there are 4 cases

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

        // return the (unchanged) node pointer
        return node;
    }

    add(key: T): void {
        this.root = this.insert(this.root, key);
    }

    // Inorder traversal of the AVL tree
    inorder(node: AVLNode<T> | null): void {
        if (node) {
            this.inorder(node.left);
            console.log(node.key);
            this.inorder(node.right);
        }
    }

    printInOrder(): void {
        this.inorder(this.root);
    }
}

// Example usage
const avlTree = new AVLTree<number>();
avlTree.add(10);
avlTree.add(20);
avlTree.add(30);
avlTree.add(40);
avlTree.add(50);
avlTree.add(25);

// Inorder traversal
avlTree.printInOrder(); // Outputs the keys in sorted order
