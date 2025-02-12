class TreeNode {
    public key: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    public height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // New node is initially added at leaf
    }
}

class AVLTree {
    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Function to get the height of the node
    private height(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Function to get balance factor of node
    private getBalanceFactor(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        return this.height(node.left) - this.height(node.right);
    }

    // Right rotate
    private rightRotate(y: TreeNode): TreeNode {
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

    // Left rotate
    private leftRotate(x: TreeNode): TreeNode {
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
    public insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: TreeNode | null, key: number): TreeNode {
        // Perform the normal BST insertion
        if (node === null) {
            return new TreeNode(key);
        }
        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // Duplicate keys are not allowed
        }

        // Update the height of this ancestor node
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        // Get the balance factor of this ancestor node to check whether
        // this node became unbalanced
        const balance = this.getBalanceFactor(node);

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

        // Return the (unchanged) node pointer
        return node;
    }

    // In-order traversal (for testing and visualization)
    public inOrderTraversal(): void {
        this.inOrder(this.root);
        console.log(); // New line for better output formatting
    }

    private inOrder(node: TreeNode | null): void {
        if (node !== null) {
            this.inOrder(node.left);
            process.stdout.write(`${node.key} `);
            this.inOrder(node.right);
        }
    }
}

// Example usage
const avl = new AVLTree();
const values = [10, 20, 30, 40, 50, 25];

for (const value of values) {
    avl.insert(value);
}

console.log('In-order traversal of the constructed AVL tree:');
avl.inOrderTraversal();
