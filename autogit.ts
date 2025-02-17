enum Color {
    RED,
    BLACK,
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

    // Helper method to perform left rotation
    private leftRotate(x: Node) {
        const y = x.right!;
        x.right = y.left;
        if (y.left !== null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    // Helper method to perform right rotation
    private rightRotate(y: Node) {
        const x = y.left!;
        y.left = x.right;
        if (x.right !== null) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (y.parent === null) {
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }

    // Insert a new key
    public insert(key: number) {
        const newNode = new Node(key);
        let y: Node | null = null;
        let x: Node | null = this.root;

        while (x !== null) {
            y = x;
            if (newNode.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = y;
        if (y === null) {
            this.root = newNode; // Tree was empty
        } else if (newNode.key < y.key) {
            y.left = newNode;
        } else {
            y.right = newNode;
        }

        this.insertFixUp(newNode);
    }

    // Fixing the tree after insertion
    private insertFixUp(z: Node) {
        while (z.parent && z.parent.color === Color.RED) {
            if (z.parent === z.parent.parent?.left) {
                const y = z.parent.parent?.right;
                if (y?.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.leftRotate(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    this.rightRotate(z.parent.parent!);
                }
            } else {
                const y = z.parent.parent?.left;
                if (y?.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    z = z.parent.parent!;
                } else {
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rightRotate(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent!.color = Color.RED;
                    this.leftRotate(z.parent.parent!);
                }
            }
        }
        this.root!.color = Color.BLACK; // Ensure root is always black
    }

    // Utility function to display the tree (for testing/debugging)
    public print() {
        const printHelper = (node: Node | null, depth: number) => {
            if (node === null) return;
            printHelper(node.right, depth + 1);
            console.log(' '.repeat(depth * 4) + node.key + (node.color === Color.RED ? " (R)" : " (B)"));
            printHelper(node.left, depth + 1);
        };
        printHelper(this.root, 0);
    }
}

// Sample usage
const rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
rbt.insert(15);
rbt.print();
