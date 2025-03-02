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

    // Helper function to get the height of the tree
    private getHeight(node: TreeNode | null): number {
        if (!node) return 0;
        return node.height;
    }

    // Helper function to get the balance factor of the node
    private getBalance(node: TreeNode | null): number {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right Rotate
    private rightRotate(y: TreeNode): TreeNode {
        const x = y.left!;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return the new root
        return x;
    }

    // Left Rotate
    private leftRotate(x: TreeNode): TreeNode {
        const y = x.right!;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return the new root
        return y;
    }

    // Insert a new node in the AVL tree
    insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: TreeNode | null, key: number): TreeNode {
        // 1. Perform the normal BST insert
        if (!node) {
            return new TreeNode(key);
        }

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
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

        // return the (unchanged) node pointer
        return node;
    }

    // In-order traversal of the AVL tree
    inorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.key);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    // A utility function to print the tree
    print() {
        const result = this.inorderTraversal(this.root);
        console.log('In-order Traversal:', result);
    }
}

// Usage
const avl = new AVLTree();
avl.insert(30);
avl.insert(20);
avl.insert(10);
avl.insert(40);
avl.insert(50);
avl.insert(25);
avl.print(); // Outputs in sorted order
