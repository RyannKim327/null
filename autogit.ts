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

    // Get the height of the node
    getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Get the balance factor of the node
    getBalance(node: TreeNode | null): number {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotate the subtree rooted with y
    rightRotate(y: TreeNode): TreeNode {
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

    // Left rotate the subtree rooted with x
    leftRotate(x: TreeNode): TreeNode {
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

    // Insert a node with the given key
    insert(node: TreeNode | null, key: number): TreeNode {
        // Perform the normal BST insert
        if (!node) return new TreeNode(key);

        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else {
            // Duplicate keys are not allowed
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

        // Return the (unchanged) node pointer
        return node;
    }

    // Public method to insert a key
    public insertKey(key: number): void {
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
    public inorderTraversal(): void {
        this.inorder(this.root);
    }
}

// Example usage
const avl = new AVLTree();
avl.insertKey(10);
avl.insertKey(20);
avl.insertKey(30);
avl.insertKey(40);
avl.insertKey(50);
avl.insertKey(25);

console.log("Inorder traversal of the constructed AVL tree is:");
avl.inorderTraversal();
