enum Color {
    RED = "RED",
    BLACK = "BLACK"
}

class TreeNode<T> {
    public color: Color;
    public left: TreeNode<T> | null;
    public right: TreeNode<T> | null;
    public parent: TreeNode<T> | null;
    public key: T;

    constructor(key: T) {
        this.key = key;
        this.color = Color.RED; // New nodes are red by default
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    public insert(key: T): void {
        const newNode = new TreeNode(key);
        this.root = this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }

    private insertNode(root: TreeNode<T> | null, node: TreeNode<T>): TreeNode<T> {
        if (root === null) {
            return node;
        }

        if (node.key < root.key) {
            root.left = this.insertNode(root.left, node);
            root.left!.parent = root;
        } else if (node.key > root.key) {
            root.right = this.insertNode(root.right, node);
            root.right!.parent = root;
        }

        return root;
    }

    private fixViolation(node: TreeNode<T>): void {
        let parent = null;
        let grandParent = null;

        while (node !== this.root && node.color === Color.RED && node.parent.color === Color.RED) {
            parent = node.parent;
            grandParent = parent.parent;

            if (parent === grandParent!.left) {
                let uncle = grandParent.right;

                if (uncle && uncle.color === Color.RED) {
                    grandParent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateRight(grandParent);
                    let tempColor = parent.color;
                    parent.color = grandParent.color;
                    grandParent.color = tempColor;
                    node = parent;
                }
            } else {
                let uncle = grandParent.left;

                if (uncle && uncle.color === Color.RED) {
                    grandParent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotateLeft(grandParent);
                    let tempColor = parent.color;
                    parent.color = grandParent.color;
                    grandParent.color = tempColor;
                    node = parent;
                }
            }
        }

        this.root!.color = Color.BLACK; // Ensure the root is black
    }

    private rotateLeft(node: TreeNode<T>): void {
        const rightChild = node.right!;
        node.right = rightChild.left;

        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild; // Node was root
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    private rotateRight(node: TreeNode<T>): void {
        const leftChild = node.left!;
        node.left = leftChild.right;

        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild; // Node was root
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    // Additional tree traversal and utility functions can be added here
    public inorderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.key, node.color);
            this.inorderTraversal(node.right);
        }
    }

    public getRoot(): TreeNode<T> | null {
        return this.root;
    }
}

// Example usage:
const rbt = new RedBlackTree<number>();
rbt.insert(10);
rbt.insert(20);
rbt.insert(15);
rbt.insert(30);

// Output the tree in order:
rbt.inorderTraversal(rbt.getRoot());
