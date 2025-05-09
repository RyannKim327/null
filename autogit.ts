class TreeNode {
    key: number;
    left: TreeNode | null;
    right: TreeNode | null;
    height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // height of the node is initially 1
    }
}

class AVLTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Function to get the height of the node
    getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Function to get the balance factor of a node
    getBalance(node: TreeNode | null): number {
        if (node == null) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotation
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

    // Left rotation
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

    // Insert a key in the AVL tree
    insert(key: number): TreeNode | null {
        this.root = this._insert(this.root, key);
        return this.root;
    }

    private _insert(node: TreeNode | null, key: number): TreeNode {
        // Perform the normal BST insert
        if (node == null) return new TreeNode(key);

        if (key < node.key) {
            node.left = this._insert(node.left, key);
        } else if (key > node.key) {
            node.right = this._insert(node.right, key);
        } else {
            return node; // Duplicate keys are not allowed
        }

        // Update the height of the ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

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

        // Return the (unchanged) node pointer
        return node;
    }

    // Function to do in-order traversal of the AVL tree
    inOrderTraversal(node: TreeNode | null): void {
        if (node != null) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(15);

console.log("In-order traversal of the AVL tree:");
avl.inOrderTraversal(avl.root);
