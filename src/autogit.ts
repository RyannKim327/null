class AVLNode {
    key: number;
    left: AVLNode | null;
    right: AVLNode | null;
    height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of a single node is 1
    }
}
class AVLTree {
    root: AVLNode | null;

    constructor() {
        this.root = null;
    }

    // Utility function to get the height of a node
    private getHeight(node: AVLNode | null): number {
        return node ? node.height : 0;
    }

    // Utility function to calculate the balance factor
    private getBalanceFactor(node: AVLNode | null): number {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Update the height of a node
    private updateHeight(node: AVLNode): void {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Right rotation
    private rotateRight(y: AVLNode): AVLNode {
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
    private rotateLeft(x: AVLNode): AVLNode {
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

    // Balance the tree
    private balance(node: AVLNode): AVLNode {
        const balanceFactor = this.getBalanceFactor(node);

        // Left-heavy
        if (balanceFactor > 1) {
            // Left-Left case
            if (this.getBalanceFactor(node.left) >= 0) {
                return this.rotateRight(node);
            }
            // Left-Right case
            else {
                node.left = this.rotateLeft(node.left!);
                return this.rotateRight(node);
            }
        }

        // Right-heavy
        if (balanceFactor < -1) {
            // Right-Right case
            if (this.getBalanceFactor(node.right) <= 0) {
                return this.rotateLeft(node);
            }
            // Right-Left case
            else {
                node.right = this.rotateRight(node.right!);
                return this.rotateLeft(node);
            }
        }

        return node;
    }

    // Insert a key into the AVL tree
    insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: AVLNode | null, key: number): AVLNode {
        // Step 1: Perform normal BST insertion
        if (!node) return new AVLNode(key);

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            // Duplicate keys are not allowed
            return node;
        }

        // Step 2: Update height of the current node
        this.updateHeight(node);

        // Step 3: Balance the tree
        return this.balance(node);
    }

    // Delete a key from the AVL tree
    delete(key: number): void {
        this.root = this.deleteNode(this.root, key);
    }

    private deleteNode(node: AVLNode | null, key: number): AVLNode | null {
        // Step 1: Perform standard BST delete
        if (!node) return null;

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key);
        } else {
            // Node with only one child or no child
            if (!node.left || !node.right) {
                const temp = node.left || node.right;
                node = temp || null;
            } else {
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                const temp = this.findMinNode(node.right);
                node.key = temp.key;
                node.right = this.deleteNode(node.right, temp.key);
            }
        }

        if (!node) return null;

        // Step 2: Update height of the current node
        this.updateHeight(node);

        // Step 3: Balance the tree
        return this.balance(node);
    }

    // Find the node with the minimum key in a subtree
    private findMinNode(node: AVLNode): AVLNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // In-order traversal for testing purposes
    inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrderHelper(this.root, result);
        return result;
    }

    private inOrderHelper(node: AVLNode | null, result: number[]): void {
        if (node) {
            this.inOrderHelper(node.left, result);
            result.push(node.key);
            this.inOrderHelper(node.right, result);
        }
    }
}
const avlTree = new AVLTree();

// Insert elements
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

// Print in-order traversal
console.log("In-order traversal:", avlTree.inOrderTraversal());

// Delete an element
avlTree.delete(30);
console.log("In-order traversal after deletion:", avlTree.inOrderTraversal());
In-order traversal: [10, 20, 25, 30, 40, 50]
In-order traversal after deletion: [10, 20, 25, 40, 50]
