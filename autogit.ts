class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    height: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // New node is initially added at leaf
    }
}

class AVLTree {
    private root: TreeNode | null = null;

    // Get the height of the node
    private getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Get balance factor of a node
    private getBalanceFactor(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotate
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

    // Left rotate
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

    // Insert value
    public insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    // Recursive function to insert a node
    private insertNode(node: TreeNode | null, value: number): TreeNode {
        // 1. Perform normal BST insertion
        if (!node) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            // Duplicate values are not allowed in the AVL tree
            return node;
        }

        // 2. Update height of this ancestor node
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        // 3. Get the balance factor
        const balance = this.getBalanceFactor(node);

        // 4. If the node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balance > 1 && value < (node.left!.value)) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && value > (node.right!.value)) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && value > (node.left!.value)) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && value < (node.right!.value)) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }

        // return the (unchanged) node pointer
        return node;
    }

    // In-order traversal to display the tree
    public inOrderTraversal(node: TreeNode | null = this.root): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Public method to get the root
    public getRoot(): TreeNode | null {
        return this.root;
    }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(25); // This will cause a left-right imbalance
avlTree.insert(5);
avlTree.inOrderTraversal(); // Output will display the keys in sorted order
