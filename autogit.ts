class TreeNode {
    key: number;
    height: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(key: number) {
        this.key = key;
        this.height = 1; // New node is initially added at leaf
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Get height of the node
    height(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Right rotate subtree rooted with y
    rightRotate(y: TreeNode): TreeNode {
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
    leftRotate(x: TreeNode): TreeNode {
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

    // Get balance factor of node
    getBalance(node: TreeNode | null): number {
        if (!node) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    // Insert a key into the subtree rooted with node and returns the new root of the subtree
    insert(node: TreeNode | null, key: number): TreeNode {
        // 1. Perform the normal BST insert
        if (!node) return new TreeNode(key);
        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else {
            // Duplicate keys are not allowed in the AVL tree
            return node;
        }

        // 2. Update height of this ancestor node
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right)));

        // 3. Get the balance factor of this ancestor node to check whether
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

    // Public method to insert a key
    public insertKey(key: number) {
        this.root = this.insert(this.root, key);
    }

    // Inorder traversal of the tree
    inorder(node: TreeNode | null): void {
        if (node) {
            this.inorder(node.left);
            console.log(node.key);
            this.inorder(node.right);
        }
    }

    // Public method to perform inorder traversal
    public inorderTraversal() {
        this.inorder(this.root);
    }
}

// Example usage:
const avl = new AVLTree();
avl.insertKey(10);
avl.insertKey(20);
avl.insertKey(30);
avl.insertKey(40);
avl.insertKey(50);
avl.insertKey(25);

// Print inorder traversal of the AVL tree
avl.inorderTraversal();
