class AVLNode {
    key: number;
    left: AVLNode | null;
    right: AVLNode | null;
    height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of a new node is 1
    }
}
class AVLTree {
    root: AVLNode | null;

    constructor() {
        this.root = null;
    }

    // Get the height of a node
    private getHeight(node: AVLNode | null): number {
        return node ? node.height : 0;
    }

    // Get the balance factor of a node
    private getBalanceFactor(node: AVLNode | null): number {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Update the height of a node
    private updateHeight(node: AVLNode): void {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
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

    // Rebalance the tree
    private rebalance(node: AVLNode): AVLNode {
        // Update height of the current node
        this.updateHeight(node);

        // Get the balance factor
        const balance = this.getBalanceFactor(node);

        // Left-heavy case
        if (balance > 1) {
            if (this.getBalanceFactor(node.left) >= 0) {
                // Left-Left case
                return this.rotateRight(node);
            } else {
                // Left-Right case
                node.left = this.rotateLeft(node.left!);
                return this.rotateRight(node);
            }
        }

        // Right-heavy case
        if (balance < -1) {
            if (this.getBalanceFactor(node.right) <= 0) {
                // Right-Right case
                return this.rotateLeft(node);
            } else {
                // Right-Left case
                node.right = this.rotateRight(node.right!);
                return this.rotateLeft(node);
            }
        }

        // No imbalance, return the node as is
        return node;
    }

    // Insert a key into the AVL tree
    public insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: AVLNode | null, key: number): AVLNode {
        // Perform standard BST insertion
        if (!node) return new AVLNode(key);

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            // Duplicate keys are not allowed
            return node;
        }

        // Rebalance the tree
        return this.rebalance(node);
    }

    // Delete a key from the AVL tree
    public delete(key: number): void {
        this.root = this.deleteNode(this.root, key);
    }

    private deleteNode(node: AVLNode | null, key: number): AVLNode | null {
        if (!node) return null;

        // Perform standard BST deletion
        if (key < node.key) {
            node.left = this.deleteNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key);
        } else {
            // Node with only one child or no child
            if (!node.left || !node.right) {
                const temp = node.left || node.right;
                if (!temp) {
                    // No child case
                    return null;
                } else {
                    // One child case
                    return temp;
                }
            } else {
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                const temp = this.getMinValueNode(node.right);
                node.key = temp.key;
                node.right = this.deleteNode(node.right, temp.key);
            }
        }

        // Rebalance the tree
        return this.rebalance(node);
    }

    // Find the node with the minimum value in a subtree
    private getMinValueNode(node: AVLNode): AVLNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // In-order traversal for debugging or verification
    public inOrderTraversal(): number[] {
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

// Print in-order traversal after deletion
console.log("In-order traversal after deletion:", avlTree.inOrderTraversal());
