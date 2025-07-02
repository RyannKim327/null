class TreeNode {
    key: number;
    left: TreeNode | null;
    right: TreeNode | null;
    height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // New node is initially added at leaf
    }
}

class AVLTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Function to get the height of the tree
    private getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Function to get the balance factor of node
    private getBalanceFactor(node: TreeNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Right rotate subtree rooted with y
    private rightRotate(y: TreeNode): TreeNode {
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

    // Left rotate subtree rooted with x
    private leftRotate(x: TreeNode): TreeNode {
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

    // Insert a node with a key into the tree
    public insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: TreeNode | null, key: number): TreeNode {
        // 1. Perform the normal BST insert
        if (node === null) return new TreeNode(key);

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            // Duplicate keys are not allowed in the AVL tree
            return node;
        }

        // 2. Update height of this ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // 3. Get the balance factor of this ancestor node to check whether this node became unbalanced
        const balanceFactor = this.getBalanceFactor(node);

        // If this node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balanceFactor > 1 && key < node.left!.key) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balanceFactor < -1 && key > node.right!.key) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balanceFactor > 1 && key > node.left!.key) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balanceFactor < -1 && key < node.right!.key) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // Function to perform in-order traversal of the tree
    public inOrderTraversal(node: TreeNode | null = this.root): number[] {
        if (node === null) {
            return [];
        }
        return [
            ...this.inOrderTraversal(node.left),
            node.key,
            ...this.inOrderTraversal(node.right),
        ];
    }
}

// Example usage
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log(avl.inOrderTraversal()); // Outputs: [10, 20, 25, 30, 40, 50]
