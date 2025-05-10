class TreeNode {
    key: number;
    height: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(key: number) {
        this.key = key;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Get the height of the tree
    getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Get balance factor of node
    getBalance(node: TreeNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Right rotate subtree rooted with y
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

    // Left rotate subtree rooted with x
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

    // Insert a new key
    insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    // Recursive function to insert a key in the subtree rooted with node
    insertNode(node: TreeNode | null, key: number): TreeNode {
        // 1. Perform the normal BST insert
        if (!node) return new TreeNode(key);

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // Duplicates are not allowed
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
    inOrderTraversal(node: TreeNode | null = this.root): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log("In-order traversal of the constructed AVL tree:");
avlTree.inOrderTraversal();
