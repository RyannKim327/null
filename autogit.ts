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

    // Function to get the height of the tree
    getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Function to get the balance factor of a node
    getBalance(node: TreeNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Right rotate
    rightRotate(y: TreeNode): TreeNode {
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

    // Left rotate
    leftRotate(x: TreeNode): TreeNode {
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

    // Insert a node
    insert(node: TreeNode | null, key: number): TreeNode {
        // 1. Perform the normal BST insert
        if (node === null) {
            return new TreeNode(key);
        }

        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else {
            // Duplicate keys are not allowed
            return node;
        }

        // 2. Update the height of this ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

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

    // Public insert method
    public insertKey(key: number): void {
        this.root = this.insert(this.root, key);
    }

    // Function to perform inorder traversal of the tree
    inorderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.key);
            this.inorderTraversal(node.right);
        }
    }

    // Public method to call inorder traversal
    public inorder(): void {
        this.inorderTraversal(this.root);
    }
}

// Example usage
const avl = new AVLTree();
avl.insertKey(10);
avl.insertKey(20);
avl.insertKey(30); // This will cause a left rotation
avl.insertKey(25);
avl.insertKey(5);
avl.insertKey(3);
avl.insertKey(8);

// To see the in-order traversal of the AVL tree
console.log("Inorder traversal of the AVL tree:");
avl.inorder();
