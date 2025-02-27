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

    getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    getBalance(node: TreeNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

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

    insert(node: TreeNode | null, key: number): TreeNode {
        // Perform normal BST insertion
        if (node === null) {
            return new TreeNode(key);
        }
        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else {
            return node; // Duplicates are not allowed
        }

        // Update the height of this ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right)));

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

    add(key: number) {
        this.root = this.insert(this.root, key);
    }

    // Additional methods for in-order traversal, deleting nodes, etc. can be added here
}

// Usage example
const avl = new AVLTree();
avl.add(10);
avl.add(20);
avl.add(30);
avl.add(5);
avl.add(3);
avl.add(4);
