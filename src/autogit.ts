class AVLTreeNode {
    value: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    height: number;

    constructor(value: number) {
        this.value = value;
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
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Update the height of a node
    private updateHeight(node: AVLTreeNode): void {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Right rotation
    private rotateRight(y: AVLTreeNode): AVLTreeNode {
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
    private rotateLeft(x: AVLTreeNode): AVLTreeNode {
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

    // Rebalance the tree
    private rebalance(node: AVLTreeNode): AVLTreeNode {
        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        // Left-heavy
        if (balanceFactor > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                // Left-Right case
                node.left = this.rotateLeft(node.left!);
            }
            // Left-Left case
            return this.rotateRight(node);
        }

        // Right-heavy
        if (balanceFactor < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                // Right-Left case
                node.right = this.rotateRight(node.right!);
            }
            // Right-Right case
            return this.rotateLeft(node);
        }

        return node;
    }

    // Insert a value into the AVL tree
    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(node: AVLTreeNode | null, value: number): AVLTreeNode {
        // Perform standard BST insertion
        if (!node) return new AVLTreeNode(value);

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            // Duplicate values are not allowed
            return node;
        }

        // Rebalance the tree
        return this.rebalance(node);
    }

    // Delete a value from the AVL tree
    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: AVLTreeNode | null, value: number): AVLTreeNode | null {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node with only one child or no child
            if (!node.left || !node.right) {
                const temp = node.left || node.right;
                if (!temp) {
                    // No child case
                    node = null;
                } else {
                    // One child case
                    node = temp;
                }
            } else {
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                const temp = this.findMinNode(node.right);
                node.value = temp.value;
                node.right = this.deleteNode(node.right, temp.value);
            }
        }

        if (!node) return null;

        // Rebalance the tree
        return this.rebalance(node);
    }

    // Find the node with the minimum value in a subtree
    private findMinNode(node: AVLTreeNode): AVLTreeNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // In-order traversal (for testing purposes)
    inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    private inOrder(node: AVLTreeNode | null, result: number[]): void {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
    }
}
const avlTree = new AVLTree();

// Insert values
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

// Print in-order traversal
console.log(avlTree.inOrderTraversal()); // [10, 20, 25, 30, 40, 50]

// Delete a value
avlTree.delete(30);
console.log(avlTree.inOrderTraversal()); // [10, 20, 25, 40, 50]
