enum Color {
    RED,
    BLACK
}

class Node {
    public key: number;
    public color: Color;
    public left: Node | null;
    public right: Node | null;
    public parent: Node | null;

    constructor(key: number, color: Color) {
        this.key = key;
        this.color = color;
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

    // Insert a new key into the red-black tree
    public insert(key: number): void {
        const newNode = new Node(key, Color.RED);
        this.root = this BSTInsert(this.root, newNode);
        this.fixViolation(newNode);
    }

    private BSTInsert(root: Node | null, newNode: Node): Node {
        if (root === null) {
            return newNode;
        }

        if (newNode.key < root.key) {
            root.left = this.BSTInsert(root.left, newNode);
            root.left!.parent = root;
        } else if (newNode.key > root.key) {
            root.right = this.BSTInsert(root.right, newNode);
            root.right!.parent = root;
        }

        return root;
    }

    // Fix violations caused by BST insertion
    private fixViolation(z: Node): void {
        while (z !== this.root && z.parent!.color === Color.RED) {
            if (z.parent === z.parent!.parent!.left) {
                const y = z.parent!.parent!.right; // Uncle

                if (y && y.color === Color.RED) {
                    // Case 1: When both the uncle and node z are red
                    z.parent!.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent!.parent!.color = Color.RED;
                    z = z.parent!.parent!;
                } else {
                    if (z === z.parent!.right) {
                        // Case 2: z is a right child
                        z = z.parent!;
                        this.leftRotate(z);
                    }

                    // Case 3: z is a left child
                    z.parent!.color = Color.BLACK;
                    z.parent!.parent!.color = Color.RED;
                    this.rightRotate(z.parent!.parent);
                }
            } else {
                const y = z.parent!.parent!.left; // Uncle

                if (y && y.color === Color.RED) {
                    // Case 1: When both the uncle and node z are red
                    z.parent!.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent!.parent!.color = Color.RED;
                    z = z.parent!.parent!;
                } else {
                    if (z === z.parent!.left) {
                        // Case 2: z is a left child
                        z = z.parent!;
                        this.rightRotate(z);
                    }

                    // Case 3: z is a right child
                    z.parent!.color = Color.BLACK;
                    z.parent!.parent!.color = Color.RED;
                    this.leftRotate(z.parent!.parent);
                }
            }
        }

        this.root!.color = Color.BLACK;
    }

    private leftRotate(x: Node): void {
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

    private right.Rotate(y: Node): void {
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

    // Additional methods to traverse, delete, etc., can be implemented here
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
// Add more inserts or other operations as needed.
