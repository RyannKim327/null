class AVLTreeNode {
    key: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of a new node is 1
    }
}

class AVLTree {
    root: AVLTreeNode | null;

    constructor() {
        this.root = null;
    }

    // Get the height of a node
    private getHeight(node: AVLTreeNode | null): number {
        return node ? node.height : 0;
    }

    // Get the balance factor of a node
    private getBalanceFactor(node: AVLTreeNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Update the height of a node
    private updateHeight(node: AVLTreeNode): void {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Right rotation
    private rightRotate(y: AVLTreeNode): AVLTreeNode {
        const x = y.left!;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Left rotation
    private leftRotate(x: AVLTreeNode): AVLTreeNode {
        const y = x.right!;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Insert a key into the AVL tree
    insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: AVLTreeNode | null, key: number): AVLTreeNode {
        // Step 1: Perform normal BST insertion
        if (!node) {
            return new AVLTreeNode(key);
        }

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            // Duplicate keys are not allowed
            return node;
        }

        // Step 2: Update the height of the current node
        this.updateHeight(node);

        // Step 3: Get the balance factor to check if the node became unbalanced
        const balance = this.getBalanceFactor(node);

        // Step 4: Perform rotations if the node is unbalanced
        // Case 1: Left-Left (LL)
        if (balance > 1 && key < (node.left?.key ?? 0)) {
            return this.rightRotate(node);
        }

        // Case 2: Right-Right (RR)
        if (balance < -1 && key > (node.right?.key ?? 0)) {
            return this.leftRotate(node);
        }

        // Case 3: Left-Right (LR)
        if (balance > 1 && key > (node.left?.key ?? 0)) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }

        // Case 4: Right-Left (RL)
        if (balance < -1 && key < (node.right?.key ?? 0)) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }

        // Return the unchanged node pointer if it's already balanced
        return node;
    }

    // In-order traversal (for testing purposes)
    inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrderHelper(this.root, result);
        return result;
    }

    private inOrderHelper(node: AVLTreeNode | null, result: number[]): void {
        if (node) {
            this.inOrderHelper(node.left, result);
            result.push(node.key);
            this.inOrderHelper(node.right, result);
        }
    }
}
const avlTree = new AVLTree();

// Insert keys
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

// Perform in-order traversal to verify the tree structure
console.log(avlTree.inOrderTraversal()); // Output: [10, 20, 25, 30, 40, 50]
