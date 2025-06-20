class AVLTreeNode {
    value: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    height: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of a single node is 1
    }
}

class AVLTree {
    root: AVLTreeNode | null;

    constructor() {
        this.root = null;
    }

    // Helper method to get the height of a node
    private getHeight(node: AVLTreeNode | null): number {
        return node ? node.height : 0;
    }

    // Helper method to calculate the balance factor of a node
    private getBalanceFactor(node: AVLTreeNode | null): number {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Update the height of a node
    private updateHeight(node: AVLTreeNode): void {
        node.height =
            Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Perform a right rotation
    private rotateRight(y: AVLTreeNode): AVLTreeNode {
        const x = y.left!;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        this.updateHeight(y);
        this.updateHeight(x);

        return x; // New root of the subtree
    }

    // Perform a left rotation
    private rotateLeft(x: AVLTreeNode): AVLTreeNode {
        const y = x.right!;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        this.updateHeight(x);
        this.updateHeight(y);

        return y; // New root of the subtree
    }

    // Insert a value into the AVL tree
    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(node: AVLTreeNode | null, value: number): AVLTreeNode {
        // Step 1: Perform normal BST insertion
        if (!node) return new AVLTreeNode(value);

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            // Duplicate values are not allowed
            return node;
        }

        // Step 2: Update the height of the current node
        this.updateHeight(node);

        // Step 3: Get the balance factor to check if the node is unbalanced
        const balanceFactor = this.getBalanceFactor(node);

        // Step 4: Perform rotations if the node is unbalanced

        // Left-Left Case
        if (balanceFactor > 1 && value < node.left!.value) {
            return this.rotateRight(node);
        }

        // Right-Right Case
        if (balanceFactor < -1 && value > node.right!.value) {
            return this.rotateLeft(node);
        }

        // Left-Right Case
        if (balanceFactor > 1 && value > node.left!.value) {
            node.left = this.rotateLeft(node.left!);
            return this.rotateRight(node);
        }

        // Right-Left Case
        if (balanceFactor < -1 && value < node.right!.value) {
            node.right = this.rotateRight(node.right!);
            return this.rotateLeft(node);
        }

        // Return the unchanged node pointer
        return node;
    }

    // In-order traversal (left -> root -> right)
    inOrderTraversal(node: AVLTreeNode | null = this.root): number[] {
        if (!node) return [];
        return [
            ...this.inOrderTraversal(node.left),
            node.value,
            ...this.inOrderTraversal(node.right),
        ];
    }

    // Pre-order traversal (root -> left -> right)
    preOrderTraversal(node: AVLTreeNode | null = this.root): number[] {
        if (!node) return [];
        return [
            node.value,
            ...this.preOrderTraversal(node.left),
            ...this.preOrderTraversal(node.right),
        ];
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

console.log("In-order traversal:", avlTree.inOrderTraversal());
console.log("Pre-order traversal:", avlTree.preOrderTraversal());
In-order traversal: [10, 20, 25, 30, 40, 50]
Pre-order traversal: [30, 20, 10, 25, 40, 50]
