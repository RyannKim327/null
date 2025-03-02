class TreeNode {
    public key: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    public height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of a new node is initially 1
    }
}

class AVLTree {
    private root: TreeNode | null = null;

    // Get the height of the node
    private getHeight(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    // Get the balance factor of a node
    private getBalanceFactor(node: TreeNode | null): number {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Rotate right
    private rightRotate(y: TreeNode): TreeNode {
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

    // Rotate left
    private leftRotate(x: TreeNode): TreeNode {
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

    // Insert a key into the AVL tree
    public insert(key: number): void {
        this.root = this.insertNode(this.root, key);
    }

    private insertNode(node: TreeNode | null, key: number): TreeNode {
        // Perform the normal BST insert
        if (node === null) {
            return new TreeNode(key);
        }

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            // Duplicate keys are not allowed in the AVL tree
            return node;
        }

        // Update the height of this ancestor node
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        // Get the balance factor
        const balance = this.getBalanceFactor(node);

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

    // In-order traversal of the tree
    public inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    private inOrder(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.key);
            this.inOrder(node.right, result);
        }
    }
}

// Example usage
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log(avl.inOrderTraversal()); // Output: [10, 20, 25, 30, 40, 50]
