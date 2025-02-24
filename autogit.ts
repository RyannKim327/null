enum Color {
    RED,
    BLACK
}

class Node {
    key: number;
    color: Color;
    left: Node | null;
    right: Node | null;
    parent: Node | null;

    constructor(key: number) {
        this.key = key;
        this.color = Color.RED; // New nodes are red by default
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    private root: Node | null;

    constructor() {
        this.root = null;
    }

    private rotateLeft(x: Node): void {
        const y = x.right!;
        x.right = y.left;

        if (y.left !== null) {
            y.left.parent = x;
        }

        y.parent = x.parent;

        if (x.parent === null) { // x is root
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }

        y.left = x;
        x.parent = y;
    }

    private rotateRight(y: Node): void {
        const x = y.left!;
        y.left = x.right;

        if (x.right !== null) {
            x.right.parent = y;
        }

        x.parent = y.parent;

        if (y.parent === null) { // y is root
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }

        x.right = y;
        y.parent = x;
    }

    private fixViolation(node: Node): void {
        while (node.parent && node.parent.color === Color.RED) {
            // If parent is a left child
            if (node.parent === node.parent.parent?.left) {
                const uncle = node.parent.parent?.right;
                if (uncle?.color === Color.RED) { // Case 1
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) { // Case 2
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = Color.BLACK; // Case 3
                    node.parent.parent.color = Color.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else { // If parent is a right child
                const uncle = node.parent.parent?.left;
                if (uncle?.color === Color.RED) { // Case 1
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) { // Case 2
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = Color.BLACK; // Case 3
                    node.parent.parent.color = Color.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root!.color = Color.BLACK;
    }

    public insert(key: number): void {
        const newNode = new Node(key);
        if (this.root === null) {
            newNode.color = Color.BLACK; // root is black
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
            this.fixViolation(newNode);
        }
    }

    private insertNode(root: Node, newNode: Node): void {
        if (newNode.key < root.key) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    public inOrderTraversal(node: Node | null = this.root): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
}

// Usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.inOrderTraversal(); // Output: 10, 20, 30
